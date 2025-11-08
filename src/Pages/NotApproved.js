import axios from "axios";
import React, { useState } from "react";

const NotApproved = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [amount, setAmount] = useState("");
  const username = JSON.parse(localStorage.getItem("ccusername"));

  // Define payment addresses
  const paymentAddresses = {
    "USDT (Tron TRC20)": "TUHQi2GDuz77yvbKZ3tXmV2aLj6F2LCtN5",
    Litecoin: "LeLS5nKWaF8sCbrJ9vQbpNmGLEeP4emztj",
    Dash: "Xh3E7xumdZQ2NNjfZX4shiK4hcxPEScLcT",
  };

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    alert("Copied!");
  };

  const handlePaymentConfirmation = (method) => {
    setSelectedPaymentMethod(method);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPaymentMethod("");
    setTransactionId("");
    setAmount("");
  };

  const transactionData = {
    username,
    selectedPaymentMethod,
    transactionId,
    amount,
    date: new Date(),
  };

  const sendTransactionData = async () => {
    await axios.post(
      "https://client1-server.vercel.app/postTransaction",
      transactionData
    );
    alert(
      `Payment varification submitted for ${selectedPaymentMethod}\nTransaction ID: ${transactionId}\nAmount: ${amount}`
    );
    closeModal();
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Red warning box */}
      <div className="bg-red-100 p-4 mb-6 rounded-md">
        <h3 className="text-red-600 font-semibold">Attention please:</h3>
        <p>Username : {username}</p>
        <p>Your account is not activated yet</p>
        <p>
          Current registration cost: <strong>$1</strong>
        </p>
        <p>
          Please contact support for further assistance if your account is not
          activated.
        </p>
      </div>

      {/* Payment Methods Section */}
      <h2 className="mb-6 text-xl font-semibold text-center">
        Payment Methods
      </h2>

      {/* Payment Method Cards */}
      {Object.keys(paymentAddresses).map((method) => (
        <div
          key={method}
          className="bg-white border border-gray-300 p-4 mb-6 rounded-lg shadow-lg"
        >
          <h3 className="text-lg font-medium mb-2">{method}</h3>
          <div className="text-gray-700 mb-2">
            <p className="font-semibold">Payment Address:</p>
            <p className="font-mono break-words text-sm sm:text-base">
              {paymentAddresses[method]}
            </p>
            <button
              onClick={() => handleCopy(paymentAddresses[method])}
              className="mt-2 sm:mt-0 ml-0 sm:ml-2 bg-gray-200 border border-gray-400 text-gray-800 px-2 py-1 rounded hover:bg-gray-300"
            >
              Copy
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            <span className="font-semibold">Message:</span> Commission fee:
            0-100$ → 5% | 100-500$ → 3% | 500-1000$ → 2% | 1000-5000$ → 1% |
            over 5000$ → 0%
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Charge:</span> $0.00
          </p>
          <button
            onClick={() => handlePaymentConfirmation(method)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-auto hover:bg-blue-700 shadow-md"
          >
            I Have Paid
          </button>
        </div>
      ))}

      {/* Modal for Payment Confirmation */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm mx-auto">
            <h4 className="text-lg font-semibold mb-4">
              Payment for {selectedPaymentMethod}
            </h4>
            <p className="mb-4">
              <span className="font-semibold">Payment Address:</span>{" "}
              {paymentAddresses[selectedPaymentMethod]}
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Transaction ID
              </label>
              <input
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="Enter transaction ID"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Amount</label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={sendTransactionData}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-[#5D005F]"
              >
                Submit
              </button>
              <button
                onClick={closeModal}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotApproved;
