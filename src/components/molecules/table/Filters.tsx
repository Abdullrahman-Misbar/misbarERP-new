import { BaseInputField, CheckBoxField, DateInputField } from "../formik-fields"
import { Column } from "./types"

const DATA_TYPES = {
    STRING: 'string',
    BOOLEAN: 'boolean',
    DATE: 'date',
}


const components = {
    [DATA_TYPES.STRING]: BaseInputField,
    [DATA_TYPES.BOOLEAN]: CheckBoxField,
    [DATA_TYPES.DATE]: DateInputField
}

type InputTP = "number" | "text" | "password" | "email"

const renderCell = ({ column, row, ...props }: {
    column: Column,
    row: any,
    type: InputTP,
    [key: string]: any
}) => {
    const Component = components[column.type || DATA_TYPES.STRING]
    return <Component name={column.name} label={column.label} id={
        `${column.name}-${row.id}`
    }
        {...props}
    />
}

