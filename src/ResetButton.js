import { toast } from "react-toastify";
import { useVending } from "./VendingMachineContextProvider";

function ResetButton() {
  const { value, reset } = useVending();

  const isDisabled = value === 0;
  return (
    <div className="reset-container">
      <button
        disabled={isDisabled}
        onClick={() => {
          toast.info(`Your change is ${value.toFixed(2)}€`);
          reset();
        }}
        className="reset-button"
      >
        {!isDisabled && "Reset"}
      </button>
    </div>
  );
}

export default ResetButton;
