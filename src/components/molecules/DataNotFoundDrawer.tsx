import DataNotFoundDrawerImg from "../atoms/icons/DataNotFoundDrawerImg";
type DataNotFoundDrawerProps_TP = {
  text: string;
};
function DataNotFoundDrawer({ text }: DataNotFoundDrawerProps_TP) {
  return (
    <div className="flex item-enter justify-center flex-col">
      <DataNotFoundDrawerImg />
      <span className="text-2xl font-somarBold mt-8 w-full text-center">
        {text}
      </span>
    </div>
  );
}

export default DataNotFoundDrawer;
