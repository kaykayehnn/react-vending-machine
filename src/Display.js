import { useVending } from "./VendingMachineContextProvider";

function Display() {
  const { text } = useVending();

  return <div className="display">{text?.toFixed(2)}</div>;
}

export default Display;
