import Link from "next/link";

export default function Cancel() {
  return (
    <div>
      <h1>Payment Cancelled</h1>
      <p>Your payment was not completed. Please try again.</p>
      <Link href="/checkout">
        <button>Go Back to Checkout</button>
      </Link>
    </div>
  );
}
