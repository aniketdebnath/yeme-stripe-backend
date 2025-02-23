import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

type PaymentButtonProps = {
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
};

const PaymentButton: React.FC<PaymentButtonProps> = ({ items }) => {
  const handlePayment = async () => {
    try {
      const res = await axios.post("/api/checkout", { items });

      const stripe = await stripePromise;
      await stripe!.redirectToCheckout({ sessionId: res.data.id });
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return <button onClick={handlePayment}>Confirm & Pay</button>;
};

export default PaymentButton;
