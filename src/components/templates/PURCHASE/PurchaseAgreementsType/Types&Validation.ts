
import * as Yup from "yup";

export type RowData = {
  id: string;
  typeName: string;
  quotationsSelectionMethod: string;
  itemsSelectionMethod: string;
  quantityDetermineMethod: string;
  notes: string;
  actions?: unknown;
}
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })
