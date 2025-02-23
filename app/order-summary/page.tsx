"use client";
import { useState } from "react";

export default function OrderSummaryPage() {
  const [order] = useState([
    { id: 1, name: "Product A", price: 5000, quantity: 1 },
    { id: 2, name: "Product B", price: 3000, quantity: 2 },
  ]);

  const handleYemePayment = () => {
    // Store order details in localStorage
    localStorage.setItem("yeme_items", JSON.stringify(order));

    // Open YEME Login in Popup
    const popup = window.open("/login", "YEME Payment", "width=600,height=700");

    // Check for Popup Close Event
    const popupInterval = setInterval(() => {
      if (popup && popup.closed) {
        clearInterval(popupInterval);
        // Reload Order Summary Page after Payment Completion
        window.location.reload();
      }
    }, 500);
  };

  const handleSimulatedPayment = (method: string) => {
    alert(`Simulated payment with ${method}. Not functional.`);
  };

  const totalAmount = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main>
      <h1>Order Summary</h1>
      <ul>
        {order.map((item) => (
          <li key={item.id}>
            {item.name} - ${(item.price / 100).toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: ${(totalAmount / 100).toFixed(2)}</h2>

      <h2>Payment Options</h2>
      <div>
        <button onClick={handleYemePayment}>Pay with YEME</button>
        <button onClick={() => handleSimulatedPayment("PayPal")}>
          Pay with PayPal (Simulated)
        </button>
        <button onClick={() => handleSimulatedPayment("Afterpay")}>
          Pay with Afterpay (Simulated)
        </button>
      </div>
    </main>
  );
}
