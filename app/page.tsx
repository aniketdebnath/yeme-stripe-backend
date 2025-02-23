import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to YEME Payment - Redeployed!</h1>

      <Link href="/login">
        <button>Pay with YEME</button>
      </Link>
    </main>
  );
}
