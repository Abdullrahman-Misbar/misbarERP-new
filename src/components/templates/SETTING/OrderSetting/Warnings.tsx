import React from 'react';
import { SwitchComp } from '../../../atoms/formik/SwitchComp';

function Warnings() {
  return (
    <div className='py-4'>
    <span className="text-xl font-bold">التحذيرات</span>
    <div className="flex items-center justify-center gap-12 w-full ">
      <div className="flex flex-col gap-2 w-[50%]">
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">    التحذير عند وجود طلب شراء لصنف كميته لم تصل إلى حد الطلب -أعلى من حد الطلب</p>
          </div>
          
        </div>
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">التحذير عند وجود طلب شراء لكمية من صتف ستؤدي إلى تجاوز الحد الأعلى للصنف </p>
          </div>
          
        </div>
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">  التحذير عند وجود أمر شراء لصنف كميته لم تصل إلى حد الطلب أعلى من حد الطلب</p>
          </div>
          
        </div>
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">التحذير عند وجود أمر شراء لكمية من صتف ستؤدي إلى تجاوز الحد الأعلى للصنف</p>
          </div>
          
        </div>
        
      </div>
      <div className="flex flex-col gap-2 w-[50%]">
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">      التحذير عند وجود طلب شراء لصنف سابق لم ينفذ </p>
          </div>
          
        </div>
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">التحذير عند وجود طلب شراء لصنف سابق لنفس المورد لم ينفذ   </p>
          </div>
          
        </div>
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">   التحذير عند وجود أمر شراء لصنف سابق لم ينفذ  </p>
          </div>
          
        </div>
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">التحذير عند وجود أمر شراء لصنف سابق لنفس المورد لم ينفذ</p>
          </div>
          
        </div>
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">     التحذير عند تجاوز القيمة الحد المسموح به لامر الشراء</p>
          </div>
          
        </div>
        
      </div>

      
    </div>
  </div>
  );
}

export default Warnings;
