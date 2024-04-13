import { connect } from "@/config/connect_db";
import Vendor from "@/models/vendor_model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, pwd } = reqBody;
    const ifUser = await Vendor.findOne({ email });
    if (ifUser) {
      return NextResponse.json(
        { error: "Vendor already exists" },
        { status: 400 }
      );
    }

    const newUser = await Vendor.create({ username, email, password: pwd });
    return NextResponse.json(
      { message: "Vendor created successfully", success: true, newUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
