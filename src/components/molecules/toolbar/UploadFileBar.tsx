import { Tooltip } from "@mui/material";
import AttachmentIcon from "../../../assets/icon/AttachmentIcon";

function UploadFileBar() {
  const handleAttachFile = () => {
    console.log("Attachment logic here");
  };
  return (
    <div>
      <Tooltip title="إرفاق ملف">
        <div className="flex items-center ">
          <AttachmentIcon disabled={false} action={handleAttachFile} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>
    </div>
  );
}

export default UploadFileBar;
