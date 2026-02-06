import InputBox from "../currencyConverter/InputBox";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import { useState } from "react";
function Currency() {
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState<string>("usd");
  const [to, setTo] = useState<string>("inr");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const currencyInfo: { [key: string]: number } = useCurrencyInfo(from);
  const optionKeys = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(Number(setAmount));
    setAmount(convertedAmount);
  };
  const convert = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setConvertedAmount(Number((amount * currencyInfo[to]).toFixed(2)));
  };
  return (
    <>
      <form
        onSubmit={convert}
        className="w-full max-w-md mx-auto px-6 py-6 my-8 bg-gray-800 text-orange-500 rounded-lg shadow-md
        sm:max-w-lg md:max-w-xl lg:max-w-2xl"
      >
        <h1 className="text-white text-center my-3">Currency Converter</h1>
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={optionKeys}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectedCurrency={from}
          onAmountChange={(amount) => setAmount(Number(amount))}
        />
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
          >
            Swap
          </button>
        </div>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={optionKeys}
          onCurrencyChange={(currency) => setTo(currency)}
          selectedCurrency={to}
          amountDisabled
        />
        <br />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
        <h1>
          {amount === 0 ? (
            <p className="text-red-400 my-2 text-center">
              Please enter an amount to convert
            </p>
          ) : (
            <p className="my-2 text-center">
              {amount} {from.toUpperCase()} = {convertedAmount}{" "}
              {to.toUpperCase()}
            </p>
          )}
        </h1>
      </form>
    </>
  );
}

export default Currency;
