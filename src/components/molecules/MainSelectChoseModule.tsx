import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { useFetch } from "../../hooks";
import SelectItemsTable from "./Selects/SelectItemsTable";
import BaseInputField from "../atoms/formik/BaseInputField";
import { v4 } from "uuid";
import MainDropItemsComp from "./DropItemsFromSelect/MainDropItemsComp";
import ModalComp from "./ModalComp";

type MainSelectChoseModule_TP = {
  moduleName: string;
};
type values_TP = {
  items_type: "purchase_order" | "purchase_request";
  num_item_id: string;
};

function MainSelectChoseModule({ moduleName }: MainSelectChoseModule_TP) {
  const { values, setFieldValue } = useFormikContext<values_TP>();
  const [open, setOpen] = useState(false);

  const endpoint =
    values.items_type == "purchase_order"
      ? `api/PurchasOrder/GetAllItemsFormOrder/${values.num_item_id}`
      : values.items_type == "purchase_request"
      ? `api/PurchasRequest/GetAllItemsFormPurchaseRequest/${values.num_item_id}`
      : values.items_type == "purchase_quotes"
      ? `api/PurchasQutations/GetAllItemsForQutation/${values.num_item_id}`
      : "";

  const { data: rowData } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
    enabled: !!(values.num_item_id && values.items_type),
  });

  useEffect(() => {
    if (rowData?.data) {
      const newDataWithId = rowData.data.map((item: any) => ({
        ...item,
        uid: v4(),
      }));
      const persistentData = values[moduleName]?.filter(
        (existingItem: any) => existingItem.id !== 0
      );
      const mergedData = [...persistentData, ...newDataWithId];
      const updatedData = mergedData.map((item: any) => {
        if (item?.product?.uoms) {
          return {
            ...item,
            uoms: [...item.product.uoms],
          };
        }
        return { ...item };
      });

      setFieldValue(moduleName, [...updatedData]);
    } else {
      // تفريغ القيم عند عدم وجود بيانات
      setFieldValue(moduleName, []);
    }
  }, [rowData]);

  const handleAgreeAction = () => {
    setFieldValue("num_item_id", values?.item_id);
    setOpen(false);
  };

  return (
    <Grid container rowSpacing={4} columnSpacing={4}>
      <Grid item xs={12} sm={3}>
        <SelectItemsTable name="items_type" setOpen={setOpen} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <BaseInputField
          name="num_item_id"
          label="الرقم"
          type="text"
          placeholder="الرقم"
        />
      </Grid>
      <ModalComp
        header="انزل من"
        open={open}
        setOpen={() => setOpen(false)}
        ActionAgreeButton={handleAgreeAction}
      >
        <MainDropItemsComp />
      </ModalComp>
    </Grid>
  );
}

export default MainSelectChoseModule;
