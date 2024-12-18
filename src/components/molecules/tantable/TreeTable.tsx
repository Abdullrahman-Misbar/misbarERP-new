import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Checkbox,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

type RowData = { [key: string]: any; children?: RowData[] };
type Column = {
  id: string;
  label: string;
  render?: (value: any, row?: RowData) => React.ReactNode;
};

interface DynamicTreeTableProps {
  rows: RowData[];
  columns: Column[];
}

function RecursiveTableRow({
  row,
  columns,
  level = 0,
}: {
  row: RowData;
  columns: Column[];
  level?: number;
}) {
  const [open, setOpen] = React.useState(false);

  const getRowBackgroundColor = () => {
    return open ? "#3F51B514" : "#FFFFFF";
  };

  return (
    <>
      <TableRow
        style={{
          backgroundColor: getRowBackgroundColor(),
          transition: "background-color 0.3s ease",
        }}
      >
   <TableCell
          style={{
            textAlign: "center",
            paddingRight: `${level * 20}px`,
          }}
          className="!border-1"
        >
          <Box sx={{ display: "flex", alignItems: "center"  , justifyContent:"center" }}>
            <Checkbox
              // checked={selectedRows.has(row.id)}
              // onChange={handleCheckboxChange}
              size="small"
            />
            {row.children && (
              <IconButton onClick={() => setOpen(!open)} size="small">
                {open ? <IoIosArrowDown /> : <IoIosArrowBack />}
              </IconButton>
            )}
          </Box>
        </TableCell>

        {columns.map((column) => (
          <TableCell
            key={column.id}
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              padding: 10,
            }}
            className="!border-1"
          >
            {column.render
              ? column.render(row[column.id], row)
              : row[column.id]}
          </TableCell>
        ))}
      </TableRow>

      {row.children && (
        <TableRow>
          <TableCell
            colSpan={columns.length + 1}
            style={{ padding: 0, backgroundColor: "#FAFAFA" }}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <Table
                  size="small"
                  style={{ tableLayout: "fixed", width: "100%" }}
                >
                  <TableBody>
                    {row.children.map((child) => (
                      <RecursiveTableRow
                        key={child.id}
                        row={child}
                        columns={columns}
                        level={level + 1}
                      />
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export default function DynamicTreeTable({
  rows,
  columns,
}: DynamicTreeTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table style={{ tableLayout: "fixed", width: "100%" }}>
        <TableHead style={{ backgroundColor: "#3F51B514" }}>
          <TableRow>
            <TableCell
              style={{
                textAlign: "center",
                fontWeight: "bold",
                // border: "1px solid #ddd",
                // color: "#FFF",
              }}
              className="!font-somar !text-black"
            >
              تحديد
            </TableCell>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  // border: "1px solid #ddd",
                  // color: "#FFF",
                }}
                className="!font-somar !text-black"
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <RecursiveTableRow key={row.id} row={row} columns={columns} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
