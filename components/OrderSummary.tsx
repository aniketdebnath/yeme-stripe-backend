import React from "react";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type OrderSummaryProps = {
  items: OrderItem[];
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Order Summary</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${(item.price / 100).toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: ${(totalAmount / 100).toFixed(2)}</h2>
    </div>
  );
};

export default OrderSummary;
