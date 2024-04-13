import User from "@/models/user_model";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/connect_db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { phone, pwd } = req;
    if (!phone || !pwd) {
      return NextResponse.json(
        { mssg: "Please Provide All Details" },
        { status: 400 }
      );
    }
    const check_user = await User.findOne({ phone });
    if (!check_user) {
      return NextResponse.json({ mssg: "User Not Found" }, { status: 400 });
    }
    const check_pwd = await bcrypt.compareSync(pwd, check_user.password);
    if (!check_pwd) {
      return NextResponse.json(
        { mssg: "Invalid Credentials" },
        { status: 400 }
      );
    }
    const payload = {
      name: check_user.name,
      email: check_user.email,
      phone: check_user.phone,
      id: check_user._id,
      role: "user",
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });
    const user_detail = {
      name: check_user.name,
      email: check_user.email,
      phone: check_user.phone,
      role: "user",
    };
    const response = NextResponse.json(
      { mssg: "Logged In successfully" },
      { status: 200 }
    );
    response.cookies.set("token", token, { httpOnly: true });
    response.cookies.set("details", JSON.stringify(user_detail));
    return response;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
