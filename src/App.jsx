import { useState } from "react";
import InputBox from "./components/InputBox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from); // funtion to get ingo about currency

    const options = Object.keys(currencyInfo); // extracting all keys

    const swap = () => {
        setAmount((prevAmount) => {
            setConvertedAmount(prevAmount);
            return convertedAmount;
        });
        setFrom(to);
        setTo(from);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <div
            className="flex flex-wrap items-center justify-center w-full h-screen font-mono bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1642354984167-a060fac63084?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg"
                        >
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
