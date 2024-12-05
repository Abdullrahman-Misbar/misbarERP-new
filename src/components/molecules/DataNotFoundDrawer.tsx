import DataNotFoundDrawarImg from "../atoms/icons/DataNotFoundDrawarImg";
type DataNotFoundDrawarProps_TP = {
  text: string;
};
function DataNotFoundDrawer({ text }: DataNotFoundDrawarProps_TP) {
  return (
    <div className="flex item-enter justify-center flex-col">
      <DataNotFoundDrawarImg />
      <span className="text-2xl font-somarBold mt-8 w-full text-center">
        {text}
      </span>
    </div>
  );
}

export default DataNotFoundDrawer;
