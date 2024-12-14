
import * as Yup from "yup";

export type RowData = {
  id: string
  templateName: string
  foreignTemplateName: string
  discerption: string
  isActive: boolean
 
  actions?: unknown 
  isCanceled?:boolean
}
