import { AppBar, Box, Skeleton, Toolbar } from "@mui/material";
// THIS IS SHARED COMPONENT
function PlayoffsSketeton() {
  return (
    <AppBar
      position="static"
      sx={{
        margin: "12px 0",

        flexShrink: 0,
        borderRadius: "4px",
        display: "flex",
        alignItems: "start",
        padding: "0 15px",
        background: "#0000000A",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ width: "100%", paddingY: "10px" }}>
        <div className="flex flex-col items-start justify-start gap-3  w-full">
          <Skeleton
            variant="rectangular"
            width={142}
            height={8}
            sx={{
              marginTop: "16px ",
              background: "#0000000A",
              borderRadius: "4px",
            }}
          />
          <Skeleton
            variant="rectangular"
            height={48}
            sx={{
              margin: "16px 0 ",
              background: "#0000000A",
              borderRadius: "4px",
              width: "100%",
            }}
          />

          <div className="w-full flex  items-start justify-between  ">
            <div className="flex w-full items-center gap-3 ">
              <Skeleton
                variant="rectangular"
                width={142}
                height={48}
                sx={{
                  marginTop: "16px ",
                  background: "#0000000A",
                  borderRadius: "4px",
                }}
              />
              <Skeleton
                variant="rectangular"
                width={221}
                height={48}
                sx={{
                  marginTop: "16px ",
                  background: "#0000000A",
                  borderRadius: "4px",
                }}
              />
              <Skeleton
                variant="rectangular"
                width={142}
                height={48}
                sx={{
                  marginTop: "16px ",
                  background: "#0000000A",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div className="flex w-full items-center justify-end gap-4 mb-4 ">
              <Skeleton
                variant="rectangular"
                width={48}
                height={48}
                sx={{
                  marginTop: "16px ",
                  background: "#0000000A",
                  borderRadius: "4px",
                }}
              />
              <Skeleton
                variant="rectangular"
                width={48}
                height={48}
                sx={{
                  marginTop: "16px ",
                  background: "#0000000A",
                  borderRadius: "4px",
                }}
              />
              <Skeleton
                variant="rectangular"
                width={48}
                height={48}
                sx={{
                  marginTop: "16px ",
                  background: "#0000000A",
                  borderRadius: "4px",
                }}
              />
              <Skeleton
                variant="rectangular"
                width={128}
                height={6}
                sx={{
                  background: "#0000000A",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default PlayoffsSketeton;
