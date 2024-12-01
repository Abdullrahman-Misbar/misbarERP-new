import React from "react";
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function TableSkeleton() {
  return (
    <TableContainer sx={{ margin: "20px", paddingX: "16px" }}>
      <Table>
        {/* رأس الجدول */}
        <TableHead sx={{ background: "#0000000A", borderRadius: "4px" }}>
          <TableRow>
            <TableCell height={42}>
              <Skeleton
                variant="text"
                width={152.281}
                height={12}
                sx={{
                  flexShrink: 0,
                  borderRadius: " 4px",
                }}
              />
            </TableCell>
            <TableCell height={42}>
              <Skeleton
                variant="text"
                width={152.281}
                height={12}
                sx={{
                  flexShrink: 0,
                  borderRadius: " 4px",
                }}
              />
            </TableCell>
            <TableCell height={42}>
              <Skeleton
                variant="text"
                width={152.281}
                height={12}
                sx={{
                  flexShrink: 0,
                  borderRadius: " 4px",
                }}
              />
            </TableCell>
            <TableCell height={42}>
              <Skeleton
                variant="text"
                width={152.281}
                height={12}
                sx={{
                  flexShrink: 0,
                  borderRadius: " 4px",
                }}
              />
            </TableCell>
            <TableCell height={42}>
              <Skeleton
                variant="text"
                width={152.281}
                height={12}
                sx={{
                  flexShrink: 0,
                  borderRadius: " 4px",
                }}
              />
            </TableCell>
            <TableCell height={42}>
              <Skeleton
                variant="text"
                width={152.281}
                height={12}
                sx={{
                  flexShrink: 0,
                  borderRadius: " 4px",
                }}
              />
            </TableCell>
          </TableRow>
        </TableHead>

        {/* جسم الجدول (Skeleton) */}
        <TableBody>
          {[...Array(14)].map((_, index) => (
            <TableRow key={index}>
              <TableCell height={42}>
                <Skeleton
                  variant="rectangular"
                  width={152.281}
                  height={12}
                  sx={{
                    flexShrink: 0,
                    borderRadius: " 4px",
                  }}
                />
              </TableCell>
              <TableCell height={42}>
                <Skeleton
                  variant="rectangular"
                  width={152.281}
                  height={12}
                  sx={{
                    flexShrink: 0,
                    borderRadius: " 4px",
                  }}
                />
              </TableCell>
              <TableCell height={42}>
                <Skeleton
                  variant="rectangular"
                  width={152.281}
                  height={12}
                  sx={{
                    flexShrink: 0,
                    borderRadius: " 4px",
                  }}
                />
              </TableCell>
              <TableCell height={42}>
                <Skeleton
                  variant="rectangular"
                  width={152.281}
                  height={12}
                  sx={{
                    flexShrink: 0,
                    borderRadius: " 4px",
                  }}
                />
              </TableCell>
              <TableCell height={42}>
                <Skeleton
                  variant="rectangular"
                  width={152.281}
                  height={12}
                  sx={{
                    flexShrink: 0,
                    borderRadius: " 4px",
                  }}
                />
              </TableCell>
              <TableCell height={42}>
                <Skeleton
                  variant="rectangular"
                  width={152.281}
                  height={12}
                  sx={{
                    flexShrink: 0,
                    borderRadius: " 4px",
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead sx={{ background: "#0000000A", borderRadius: "4px" }}>
          <TableRow>
            <TableCell height={42}>
              <Skeleton
                variant="text"
                width={152.281}
                height={12}
                sx={{
                  flexShrink: 0,
                  borderRadius: " 4px",
                }}
              />
            </TableCell>
            <TableCell height={42}>
              <Skeleton
                variant="text"
                width={152.281}
                height={12}
                sx={{
                  flexShrink: 0,
                  borderRadius: " 4px",
                }}
              />
            </TableCell>
            <TableCell height={42}>
              <Skeleton
                variant="text"
                width={152.281}
                height={12}
                sx={{
                  flexShrink: 0,
                  borderRadius: " 4px",
                }}
              />
            </TableCell>
            <TableCell height={42}></TableCell>
            <TableCell height={42}></TableCell>
            <TableCell height={42}></TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default TableSkeleton;
