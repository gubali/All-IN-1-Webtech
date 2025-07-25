import React, { useId } from "react";
interface CurrencyInputProps {
  label?: string;
  amount: string | number;
  onAmountChange?: (newAmount: string | number) => void;
  onCurrencyChange?: (newCurrency: string) => void;
  currencyOptions?: string[];
  selectedCurrency: string;
  amountDisabled?: boolean;
  currencyDisabled?: boolean;
  className?: string;
}
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}: CurrencyInputProps) {
  const amountInputId = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="text-black/40 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisabled}
            value={amount }
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 
          cursor-pointer outline-none"
            value={selectedCurrency}
            disabled={currencyDisabled}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {
            currencyOptions && currencyOptions.length > 0
              ? currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency.toUpperCase()}
                  </option>
                ))
              : null
              }
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;

