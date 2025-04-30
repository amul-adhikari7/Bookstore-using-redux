import React from "react";

const EsewaCheckout = ({ amount = 100, productId = "BOOK123" }) => {
  const handleEsewaPay = () => {
    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "https://uat.esewa.com.np/epay/main");

    const fields = {
      tAmt: amount,
      amt: amount - 10, // base price
      txAmt: 5,
      psc: 2,
      pdc: 3,
      scd: "EPAYTEST", // test merchant code
      pid: productId,
      su: "http://localhost:5173/success",
      fu: "http://localhost:5173/failure",
    };

    for (const key in fields) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <button
      onClick={handleEsewaPay}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
    >
      Pay with eSewa
    </button>
  );
};

export default EsewaCheckout;
