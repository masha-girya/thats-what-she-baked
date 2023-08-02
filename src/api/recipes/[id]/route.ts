import recipes from "@/data/recipes.json";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: any) {
  try {
    const recipe = recipes.data.find((item) => item.id === params.id);

    if (!recipe) {
      return new NextResponse("not found", { status: 404 });
    }

    return NextResponse.json({recipe});
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
