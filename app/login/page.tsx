"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth", {
        username,
        password,
      });

      // Store Token
      localStorage.setItem("yeme_token", res.data.token);

      // Redirect to Checkout
      router.push("/checkout");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.error || "Login failed");
      } else {
        setError("Login failed");
      }
    }
  };

  return (
    <div>
      <h1>Login to YEME</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
