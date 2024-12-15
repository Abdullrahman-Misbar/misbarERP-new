
function Error500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-600">
      <div className="mb-4">
        <img
          src="/src/assets/NoData.png"
        />
      </div>

      <h2 className="text-lg font-somarBold text-black mb-2 text-[20px]">
        لا توجد بيانات
      </h2>

      <p className="text-sm font-somarLight text-gray-500">
        حدد المعوف التي تحتاجها حتى يظهر المحتوى
      </p>
    </div>
  );
}

export default Error500;
