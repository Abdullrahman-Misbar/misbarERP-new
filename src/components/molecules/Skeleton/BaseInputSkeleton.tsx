import { Skeleton } from "@mui/material";

function BaseInputSkeleton() {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width={340}
        height={48}
        sx={{
          margin: "12px 0",
          background: "#0000000A",
          borderRadius: "4px",
        }}
      />
    </>
  );
}

export default BaseInputSkeleton;
