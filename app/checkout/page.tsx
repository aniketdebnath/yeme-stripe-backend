"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OrderSummary from "@/components/OrderSummary";
import PaymentButton from "@/components/PaymentButton";

export default function Checkout() {
  const router = useRouter();
  const [order] = useState([
    { id: 1, name: "Product A", price: 5000, quantity: 1 },
    { id: 2, name: "Product B", price: 3000, quantity: 2 },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("yeme_token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <OrderSummary items={order} />
      <PaymentButton items={order} />
    </div>
  );
}
