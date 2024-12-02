import { AppBar, Skeleton, Toolbar } from "@mui/material";
import React from "react";

function AddSectionskeleton() {
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          margin: "12px 0",
          height: "64px",
          flexShrink: 0,
          borderRadius: "4px",
          display: "flex",
          alignItems: "start",
          padding: "0 20px",
          background: "#0000000A",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <div className="flex items-center justify-center gap-3">
            <Skeleton
              variant="rectangular"
              width={100}
              height={42}
              sx={{
                margin: "12px 0",
                background: "#0000000A",
                borderRadius: "4px",
              }}
            />
            <Skeleton variant="circular" width={45} height={45} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AddSectionskeleton;
