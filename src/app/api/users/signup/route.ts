import User from "@/models/user_model";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/connect_db";
import bcrypt from "bcrypt";

connect();
const salt = bcrypt.genSaltSync(4);
export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { name, email, phone, pwd } = req;
    if (!name || !email || !phone || !pwd) {
      return NextResponse.json(
        { mssg: "Please Provide All Details" },
        { status: 400 }
      );
    }
    const hash_pwd = await bcrypt.hashSync(pwd, salt);
    const new_user = await User.create({
      name,
      email,
      phone,
      password: hash_pwd,
    });
    return NextResponse.json(
      { mssg: "User registered successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
