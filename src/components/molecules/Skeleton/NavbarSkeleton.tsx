import React from "react";
import { AppBar, Box, Skeleton, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        height: "64px",
        flexShrink: 0,
        borderRadius: "4px",
        display: "flex",
        alignItems: "end",

        padding: "0 20px",
        background: "#0000000A",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <div className="flex items-center justify-center gap-3">
          <Skeleton
            variant="circular"
            sx={{ background: "#0000000A" }}
            width={40}
            height={40}
          />

          <div className="flex flex-col  items-start gap-2">
            <Box
              sx={{
                width: 300,
                height: "12px",
                background: "#0000000A",
                borderRadius: "4px",
              }}
            ></Box>
            <Box
              sx={{
                width: "93px",
                height: "6px",
                background: "#0000000A",
                borderRadius: "4px",
              }}
            ></Box>
          </div>
        </div>
        {/* For other variants, adjust the size with `width` and `height` */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
