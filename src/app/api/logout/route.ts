import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({ mssg: "Logout Successfull" });
    response.cookies.set("token", "", { httpOnly: true });
    response.cookies.set("details", "");
    return response;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
