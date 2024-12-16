import React from "react";
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-50 text-center">
      <img
        src="/assets/404.png"
        alt="Error 404"
        className="w-1/2 max-w-md mb-8"
      />

      <h1 className="text-xl font-somarBold text-black mb-4">
        لقد فقدنا هذه الصفحة
      </h1>

      <p className="text-light mb-4">
        الصفحة المطلوبة مفقودة. تحقق من عنوان URL أو{" "}
        <a href="/" className="text-primary hover:underline">
          العودة إلى الرئيسية
        </a>
      </p>
    </div>
  );
}

export default NotFound;
