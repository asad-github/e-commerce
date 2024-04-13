import { connect } from "@/config/connect_db";
import Vendor from "@/models/vendor_model";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
connect();

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const verify_token = await jwt.verify(token, process.env.JWT_SECRET!);
    if (!verify_token) {
      return NextResponse.json(
        { mssg: "Invalid token", success: false },
        { status: 400 }
      );
    }
    const token_user = await Vendor.findById((verify_token as any).id);
    if (!token_user) {
      return NextResponse.json(
        { mssg: "No Vendor Account", success: false },
        { status: 400 }
      );
    }
    // const newUser = await Vendor.create({ username, email, password: pwd });
    return NextResponse.json(
      {
        mssg: "Vendor found please login with vendor account",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
