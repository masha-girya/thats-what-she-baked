import recipes from "@/data/recipes.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ recipe: recipes.data[recipes.data.length - 1] });
}