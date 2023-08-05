import { toast } from "react-toastify";
import useSound from "use-sound";
import { useVending } from "./VendingMachineContextProvider";
import deniedSound from "./sounds/denied.mp3";

function Product({ src, name, price, buyProduct }) {
  const { setPrice, returnChange } = useVending();
  const [play] = useSound(deniedSound);

  const onMouseOver = () => {
    setPrice(price);
  };

  const onMouseOut = () => {
    setPrice(null);
  };

  return (
    <button
      onClick={() => {
        try {
          const change = buyProduct(price);
          let message = `You bought ${name} for ${price.toFixed(2)}€`;
          if (change > 0) message += `. Your change is ${change.toFixed(2)}€`;

          toast.success(message);
          setPrice(null);
          returnChange();
        } catch (e) {
          toast.error(e.message);
          play(deniedSound);
        }
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="button-product"
    >
      <img className="product-image" src={src} alt={name} />
    </button>
  );
}

export default Product;
