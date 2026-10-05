import { NextResponse } from "next/server";
import type { ApiResponse } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address format.",
          error: "VALIDATION_FAILED",
        },
        { status: 400 }
      );
    }

    // In a production environment, send this lead to Resend, SendGrid, or a CRM database
    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to Wanderlush updates.",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Malformed request payload.",
        error: "INVALID_JSON",
      },
      { status: 400 }
    );
  }
}
