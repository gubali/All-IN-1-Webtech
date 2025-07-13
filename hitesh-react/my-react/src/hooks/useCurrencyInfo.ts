import { useEffect, useState } from "react";

function useCurrencyInfo(currency: string) {
  const [currencyData, setCurrencyData] = useState({});
  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const data = await response.json();
        setCurrencyData(data[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };
    console.log(currencyData);
    fetchCurrencyData();
  }, [currency]);

  return currencyData;
}

export default useCurrencyInfo;
