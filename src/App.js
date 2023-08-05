import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CoinButton from "./CoinButton";
import VendingMachine from "./VendingMachine";
import VendingMachineContextProvider from "./VendingMachineContextProvider";

function App() {
  return (
    <VendingMachineContextProvider>
      <h1 className="title">Byte & Sip: The Automat Tavern</h1>
      <main className="main-container">
        <VendingMachine />
        <div className="coins">
          <CoinButton
            value={0.1}
            src="./images/coins/Greece_10cent.jpg"
            alt="10 cent coin"
          />
          <CoinButton
            value={0.2}
            src="./images/coins/Greece_20cent.jpg"
            alt="20 cent coin"
          />
          <CoinButton
            value={0.5}
            src="./images/coins/Greece_50cent.jpg"
            alt="50 cent coin"
          />
          <CoinButton
            value={1}
            src="./images/coins/Greece_1euro.jpg"
            alt="1 euro coin"
          />
          <CoinButton
            value={2}
            src="./images/coins/Greece_2euro.jpg"
            alt="2 euro coin"
          />
        </div>
        <ToastContainer autoClose={2500} />
      </main>
    </VendingMachineContextProvider>
  );
}

export default App;
