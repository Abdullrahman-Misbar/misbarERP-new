import BreadcrumbComponent from "../../../../molecules/Breadcrumb";

function MainHeadLayout() {
  const breadcrumbItems = [
    { label: "المشتريات", link: "/" },
    { label: " التقارير" },
    { label: " تقرير  مقارنة المشتريات اصناف - فواتير " },
  ];

  return (
    <div>
      <p className=" bg-white rounded-lg mb-2">
        <BreadcrumbComponent items={breadcrumbItems} />
      </p>
    </div>
  );
}

export default MainHeadLayout;
