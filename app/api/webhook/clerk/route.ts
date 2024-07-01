import { NextResponse } from "next/server";
import signature from "./checkSign";
import createOrDeleteUser from "./create-or-delete-user";

export async function POST(req: Request) {
  const payload = await req.json();
  const body = JSON.stringify(payload);

  try {
    signature(body);
    await createOrDeleteUser(payload);
    return NextResponse.json("ok", { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}