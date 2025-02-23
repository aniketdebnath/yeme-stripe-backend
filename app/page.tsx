import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Merchant Demo Page</h1>

      <Link href="/order-summary">
        <button>Shop Now!</button>
      </Link>
    </main>
  );
}
