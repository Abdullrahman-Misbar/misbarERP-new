import { Tooltip } from '@mui/material'
import React from 'react'
import CalenderIcon from '../../../assets/icon/CalenderIcon'

function ScheduledActivities() {
  
  const handleCalendar = () => {
    console.log("Calendar action triggered");
  };
  return (
    <div>
        <Tooltip title="الانشطة المجدولة">
            <div className="flex items-center p-3">
              <CalenderIcon action={handleCalendar} />
            </div>
          </Tooltip>
    </div>
  )
}

export default ScheduledActivities