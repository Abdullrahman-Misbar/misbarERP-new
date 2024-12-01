import React from "react";
import { AppBar, Box, Skeleton, Toolbar } from "@mui/material";

function AnalysisCardSkeleton() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          margin: "12px 0",
          flexShrink: 0,
          borderRadius: "4px",
          display: "flex",
          alignItems: "start",
          padding: "0 20px",
          background: "#0000000A",
          boxShadow: "none",
          width: "100%",
        }}
      >
        <Toolbar className={"w-full "}>
          <div className="w-full grid grid-cols-12 gap-4">
            {/* Curve: Takes 7 columns */}
            <div className="col-span-7 ">
              <div className="flex-col flex w-full gap-3">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  sx={{
                    width: "100%",
                    height: "156px",
                    margin: "10px 0",
                    background: "#0000000A",
                  }}
                />
              </div>
              <div className="w-full flex items-center justify-between  ">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  sx={{
                    minWidth: "48%",
                    height: "156px",
                    margin: "10px 0",
                    background: "#0000000A",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{
                    minWidth: "48%",
                    height: "156px",
                    margin: "10px 0",
                    background: "#0000000A",
                  }}
                />
              </div>
            </div>

            {/* Average Order: Takes 5 columns */}
            <div className="col-span-5 ">
              <Skeleton
                animation="wave"
                variant="rectangular"
                sx={{
                  width: "100%",
                  height: "95%",
                  marginTop: "10px ",
                  background: "#0000000A",
                }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AnalysisCardSkeleton;
