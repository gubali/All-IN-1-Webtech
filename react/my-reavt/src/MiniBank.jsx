import React, { useState } from "react";

const MiniBank = () => {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    
    const handleDeposit = () => {
        setBalance(balance + amount);
        setAmount(0);
    };
    
    const handleWithdraw = () => {
        if (amount > balance) {
        alert("Insufficient funds");
        } else {
        setBalance(balance - amount);
        setAmount(0);
        }
    };
    
    return (
        <div>
        <h1>Mini Bank</h1>
        <p>Balance: ${balance}</p>
        <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
}
export default MiniBank;