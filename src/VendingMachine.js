import useSwr from "swr";
import Display from "./Display";
import Product from "./Product";
import ResetButton from "./ResetButton";
import { useVending } from "./VendingMachineContextProvider";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function VendingMachine() {
  const { data, isLoading } = useSwr("http://localhost:3002/products", fetcher);
  const { buy } = useVending();

  return (
    <div className="vending-container">
      <img
        className="vending-machine"
        src="/images/vending-machine.jpg"
        alt="Vending machine"
      />
      <div className="products">
        {!isLoading &&
          data.map((p) => (
            <Product
              key={p.name}
              src={p.image}
              name={p.name}
              price={p.price}
              buyProduct={() => {
                if (p.quantity <= 0) {
                  throw new Error(
                    `There is no more ${p.name} in the vending machine`
                  );
                }

                const change = buy(p.price);

                p.quantity--;

                return change;
              }}
            />
          ))}
      </div>
      <Display />
      <ResetButton />
    </div>
  );
}

export default VendingMachine;
