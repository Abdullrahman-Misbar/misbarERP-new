
import * as Yup from "yup";

export type RowData = {
  id: number;
  categoryCode: string;
  categoryName: string;
  mainCategoryId: number;
  accountId: number;
  costCenterId: number;
  note: string;
  accountName: string;
  costCenterName: string;
  mainCategoryName: string;
  tags: Array<{
    tagId: number;
    partnerId: string;
    tagName: string;
    isDeleted: boolean;
  }>;
};


export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })
