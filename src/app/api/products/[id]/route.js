//app\api\products\[id]\route.js
import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newProject: project,
    newImplementation: implementation,
    newEmail: email,
    newMobile: mobile,
    newBudget: budget,
    newYear: year,
    newevaluation: evaluation,
    newStrength: strength,
    newWeak: weak,
    newDeverlopment: deverlopment,
    newSuggestion: suggestion,
  } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, { 
    name, 
    project, 
    implementation, 
    email, 
    mobile, 
    budget, 
    year, 
    evaluation, 
    strength, 
    weak, 
    deverlopment, 
    suggestion
   });
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
