import { NextRequest, NextResponse } from "next/server";

// Mock Users Database
const users = [
  { username: "yeme_user", password: "password123", token: "yeme_fake_token" },
];

// POST /api/auth
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  // Validate User
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Return Fake Token
  return NextResponse.json({ token: user.token });
}
