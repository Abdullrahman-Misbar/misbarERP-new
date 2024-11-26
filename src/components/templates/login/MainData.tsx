import React from "react";
import BaseInputField from "../../atoms/Label/formik/BaseInputField";
import { Link } from "react-router-dom";
import { Form } from "formik";

const LoginForm = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-12">
      <div className="hidden md:col-span-7 md:flex bg-gray-100 items-center justify-center">
        <img
          src="/src/assets/login.png"
          alt="Login Illustration"
          className="max-h-[680px] max-w-full m-12"
        />
      </div>

      <div className="col-span-12 md:col-span-5 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-[450px]">
          {/* Header */}
          <div className="text-start mb-6">
            <h1 className="text-[1.5rem] font-somarBold text-[#434050]">
              مرحبًا بك في erpMisbar!👋🏻
            </h1>
            <p className="text-light mt-2 font-somarBold">
              يرجى تسجيل الدخول إلى حسابك وبدء المغامرة
            </p>
          </div>

          <div className="bg-[#104bba29] text-[#104bba] px-4 py-4 rounded-lg text-sm mb-4 font-somarBold relative">
            <p>اسم المستخدم: admin / كلمة المرور: admin</p>
          </div>

          <Form>
            <div className="space-y-4">
              {/* Username Field */}
              <div>
                <label className="font-somarBold text-[14px] my-1">
                  اسم المستخدم
                </label>
                <BaseInputField
                  name="email"
                  label=" أدخل اسم المستخدم الخاص بك"
                  type="email"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="font-somarBold text-[14px] my-1">
                  كلمة المرور
                </label>
                <BaseInputField
                  name="password"
                  label=" أدخل كلمه المرور الخاصة بك"
                  type="password"
                />
              </div>

              <div className="flex items-center justify-between font-somar">
                <label className="flex items-center text-sm text-gray-700">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  تذكرني
                </label>
                <a href="#" className="text-sm text-primary hover:underline">
                  هل نسيت كلمة المرور؟
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#104bba] text-white rounded-lg py-2 mt-6 hover:bg-blue-700 transition font-somarBold"
            >
              تسجيل الدخول
            </button>

            <div className="flex items-center my-6">
              <div className="flex-grow bg-gray-300 h-px"></div>
              <p className="px-4 text-gray-500 text-sm font-somarLight">أو</p>
              <div className="flex-grow bg-gray-300 h-px"></div>
            </div>

            <p className="text-center text-sm text-gray-700 font-somar">
              جديد على منصتنا؟{" "}
              <Link
                to="#"
                className="text-primary hover:underline font-somarBold"
              >
                أنشئ حسابًا
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
