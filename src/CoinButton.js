import { useState } from "react";
import useSound from "use-sound";
import { useVending } from "./VendingMachineContextProvider";
import coinSound from "./sounds/coin.mp3";

function CoinButton({ value, src, alt }) {
  const [play] = useSound(coinSound);
  const [animation, setAnimation] = useState(false);

  const { insertCoin } = useVending();

  return (
    <button
      onClick={() => {
        insertCoin(value);
        setAnimation(true);
        play();
        setTimeout(() => setAnimation(false), 300);
      }}
      className={`button-coin ${animation ? "spinning" : ""}`}
    >
      <img className="coin" src={src} alt={alt} />
    </button>
  );
}

export default CoinButton;
