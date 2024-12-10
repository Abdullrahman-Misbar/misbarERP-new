import BreadcrumbComponent from "../../molecules/Breadcrumb";
import MainTabs from "./MainTabs";

function MainHeadLayout() {
  const breadcrumbItems = [
    { label: "التهيئة", link: "/" },
    { label: "الاعدادات" },
  ];

  return (
    <div>
      <p className=" bg-white rounded-lg mb-2">
        <BreadcrumbComponent items={breadcrumbItems} />
      </p>

      <MainTabs />
    </div>
  );
}

export default MainHeadLayout;
