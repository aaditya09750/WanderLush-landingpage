import { NextResponse } from "next/server";
import { STAYS_DATA } from "@/constants/stays";
import type { ApiResponse, StayItem } from "@/types";

export async function GET(request: Request): Promise<NextResponse<ApiResponse<StayItem[]>>> {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (!category || category === "All") {
    return NextResponse.json({
      success: true,
      message: "Retrieved all accommodations.",
      data: STAYS_DATA,
    });
  }

  const filtered = STAYS_DATA.filter(
    (stay) => stay.category?.toLowerCase() === category.toLowerCase()
  );

  return NextResponse.json({
    success: true,
    message: `Retrieved accommodations for category: ${category}.`,
    data: filtered,
  });
}
