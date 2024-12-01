import { AppBar, Box, Skeleton, Toolbar } from "@mui/material";
function OverviewSkeleton() {
  return (
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
            width={300}
            height={12}
            sx={{
              margin: "12px 0",
              background: "#0000000A",
              borderRadius: "4px",
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default OverviewSkeleton;
