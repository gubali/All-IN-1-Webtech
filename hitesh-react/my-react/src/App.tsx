import "./App.css";
import FunctionalComponent from "./FunctionComponent.js";
import FilterItems from "./FilterBySearch.js";
import MyUseState from "./MyUseState.js";
import Profile from "./component/Profile.js";
import { useCallback, useEffect, useState, useRef } from "react";
import InputBox from "./component/currencyConverter/InputBox.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import Header from "./component/header/Header.js";
import Footer from "./component/footer/Footer.js";
import Home from "./Home/Home.js";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const myObj = [
    {
      name: "Hitesh",
      designation: "web developer",
      star: 21000,
      user: 10000,
      total: 105,
      profileUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      name: "Asif",
      designation: "Java Full stack developer",
      star: 24000,
      user: 10000,
      total: 1115,
      profileUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      name: "Khan",
      designation: "React Developer",
      star: 20000,
      user: 10000,
      total: 15,
      profileUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
  ];

  const myObj2 = [
    {
      name: "Haniya",
      designation: "web developer",
      star: 21000,
      user: 10000,
      total: 105,
      profileUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      name: "John",
      designation: "Java Full stack developer",
      star: 24000,
      user: 10000,
      total: 1115,
      profileUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      name: "Paul",
      designation: "React Developer",
      star: 20000,
      user: 10000,
      total: 15,
      profileUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
  ];
  const [bgColor, setBgColor] = useState("#fff");
  // password generator

  const [length, setLength] = useState<number>(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [myClick, setMyClickCount] = useState(0);
  // useREf
  //
  const passwordRef = useRef<HTMLInputElement>(null);

  // currency converter
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
  //end
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      console.log("----" + str.charAt(char));
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
    console.warn("Password generated successfully!");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  const onlyClick = useCallback(() => {
    setMyClickCount((prev) => prev + 1);
    console.log("Clicked");
  }, [myClick]);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
    <Header />
    < br />
    <div className="container mx-auto" style={{ padding: "20px" }}>
      <div style={{ backgroundColor: bgColor }}>
        {/* Your UI components */}
        <h1>{myClick}</h1>
        <button
          style={{ backgroundColor: "green" }}
          className="outline-none px-4 rounded-full py-1"
          onClick={onlyClick}
        >
          Click to Count
        </button>
        <br />
        <br />
        <button
          className="outline-none px-4 rounded-full py-1"
          style={{ backgroundColor: "red" }}
          onClick={() => setBgColor("red")}
        >
          Red
        </button>
        <button
          className="outline-none px-4 rounded-full py-1"
          style={{ backgroundColor: "green" }}
          onClick={() => setBgColor("green")}
        >
          Green
        </button>
        <button
          className="outline-none px-4 rounded-full py-1"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setBgColor("yellow")}
        >
          Yellow
        </button>
        <div
          style={{
            border: "1px solid green",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>Click on the button to change the background color</h3>
        </div>

        <FunctionalComponent name="React Developer" />
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <FilterItems />
        </div>

        <div
          style={{ border: "1px solid red", padding: "10px", margin: "10px" }}
        >
          <MyUseState />
        </div>

        <Profile channel="asif" props={myObj} btnText="Subscribe Now" />
        <div
          style={{
            border: "1px solid red",
            padding: "10px",
            margin: "10px",
          }}
        >
          <Profile channel="Haniya" props={myObj2} btnText="" />
        </div>

        {/* Password Generator */}
      </div>
      <div
        className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="flex justify-around gap-10 w-full max-w-6xl mx-auto">
          {/* Password Generator */}
          <div className="w-full max-w-md shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className="text-white text-center my-3">Password generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input
                type="text"
                className="outline-none w-full py-1 px-3"
                value={password}
                placeholder="Password"
                readOnly
                ref={passwordRef}
                style={{ backgroundColor: "#fff" }}
              />
              <button
                onClick={copyPasswordToClipboard}
                className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              >
                Copy
              </button>
            </div>
            <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                <input
                  type="range"
                  min={6}
                  max={50}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => {
                    setLength(Number(e.target.value));
                  }}
                />
                <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  id="numberInput"
                  checked={numberAllowed}
                  onChange={() => setNumberAllowed((prev) => !prev)}
                />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  id="characterInput"
                  defaultChecked={characterAllowed}
                  onChange={() => setCharacterAllowed((prev) => !prev)}
                />
                <label htmlFor="characterInput">Characters</label>
              </div>
            </div>
          </div>

          {/* Currency Converter */}
          <form
            onSubmit={convert}
            className="w-full max-w-md shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500"
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
            < br />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      </div>
      <br />
      <Home />
      <Footer />
    </>
  );
}

export default App;
