
import * as Yup from "yup";

export type RowData = {
  id: number;
  empCode: string;
  empName: string;
  phone: string;
  email: string;
  address: string;
  generalDataNote: string;
  hireDate: string; 
  deptId: number;
  jobPositionId: number;
  managerId: number;
  workRecord: string;
  workDataNote: string;
  isActive: boolean;
  note: string;
  actions?: unknown;
};



export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })
