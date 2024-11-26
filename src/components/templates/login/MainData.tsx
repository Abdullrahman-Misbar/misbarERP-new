import Button from "../../atoms/button/Button"
import BaseInputField from "../../atoms/formik/BaseInputField"
import { Label } from "../../atoms/formik/Label"

type LoginForm_TP = {
  isPending:boolean
}
const LoginForm = ({ isPending }: LoginForm_TP) => {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-12">
      <div className="items-center justify-center hidden bg-gray-100 md:col-span-8 md:flex">
        <img
          src="/src/assets/login.png"
          alt="Login Illustration"
          className="max-h-[680px] max-w-full m-12"
        />
      </div>

      <div className="flex items-center justify-center col-span-12 p-8 bg-white md:col-span-4">
        <div className="w-full max-w-[450px]">
          {/* Header */}
          <div className="mb-6 text-start">
            <h1 className="text-[1.5rem] font-somarBold text-[#434050]">
              مرحبًا بك في erpMisbar!👋🏻
            </h1>
            <p className="mt-2 text-light font-somarBold">
              يرجى تسجيل الدخول إلى حسابك وبدء المغامرة
            </p>
          </div>

          <div className="bg-[#104bba29] text-[#104bba] px-4 py-4 rounded-lg text-sm mb-4 font-somarBold relative">
            <p>اسم المستخدم: admin / كلمة المرور: admin</p>
          </div>

          <div className="space-y-4">
            <div>
              <BaseInputField
                name="username"
                label="اسم المستخدم"
                placeholder=" أدخل اسم المستخدم الخاص بك"
                type="email"
              />
            </div>

            <div>
              <BaseInputField
                name="password"
                label="  كلمة المرور"
                placeholder=" أدخل كلمه المرور الخاصة بك"
                type="password"
              />
            </div>

            <div className="flex items-center justify-between font-somar">
              <Label
                htmlFor=""
                className="flex items-center text-sm text-gray-700"
              >
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="mx-2">تذكرني</span>
              </Label>

              <a href="#" className="text-sm text-primary hover:underline">
                هل نسيت كلمة المرور؟
              </a>
            </div>
          </div>

          <Button text="تسجيل الدخول" type="submit" isPending={isPending} />

          {/* <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <p className="px-4 text-sm text-gray-500 font-somarLight">أو</p>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div> */}

          {/* <p className="text-sm text-center text-gray-700 font-somar">
            جديد على منصتنا؟{" "}
            <Link
              to="#"
              className="text-primary hover:underline font-somarBold"
            >
              أنشئ حسابًا
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default LoginForm
