import { Tooltip } from '@mui/material';
import Setting from '../../../assets/icon/SettingIcon';

function SettingBar() {
    const handleSettings = () => {
        console.log("Open settings modal or navigate to settings page");
      };
  return (
    <div>
          <Tooltip title="الإعدادات">
            <div className="flex items-center ">
              <Setting disabled={false} action={handleSettings} />
              <div className="w-px h-12 bg-gray-200 mx-4"></div>
            </div>
          </Tooltip>
    </div>
  )
}

export default SettingBar