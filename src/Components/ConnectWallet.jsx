import { useState, useEffect } from "react";
import Web3 from "web3";

export default function ConnectWallet() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("🛑 User rejected connection:", err);
      }
    } else {
      alert("🦊 Please install MetaMask!");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={connectWallet}
        className="bg-red-600 text-white px-6 py-3 rounded-3xl hover:bg-red-700 transition font-semibold shadow-md"
      >
        {account
          ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
          : "Connect Wallet"}
      </button>
    </div>
  );
}
