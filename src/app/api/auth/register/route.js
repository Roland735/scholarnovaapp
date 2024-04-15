import { connectDB } from "@/configs/dbConfig";
import { userModel } from "@/models/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { firstname, lastname, role, regNumber, email, password } = await req.json();

  await connectDB();
  const existingUser = await userModel.findOne({ regNumber });
  console.log(existingUser)
  if (existingUser) {
    return NextResponse.json(
      { message: "Email is already registered" },
      { status: 400 }
    );
  }
  const newUser = await userModel.create({ firstname, lastname, role, regNumber, email, password });
  return NextResponse.json(
    { message: "User registered successfully" },
    { status: 201 }
  );
};
