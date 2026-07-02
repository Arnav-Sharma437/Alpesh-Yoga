import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Server log of incoming application details
    console.log("Alpesh Yoga Admissions Server Received Application:", {
      fullName: data.fullName,
      email: data.email,
      program: data.program,
      batch: data.batch,
      whatsapp: `${data.whatsappCode} ${data.whatsappNumber}`,
      age: data.age,
      nationality: data.nationality,
      hasInjuries: data.hasInjuries,
      injuryDetails: data.injuryDetails,
    });

    // In production, integrate Resend, NodeMailer, or Formspree here to trigger email notifications:
    // e.g. resend.emails.send(...)

    return NextResponse.json({
      success: true,
      message: "Application received and logged on admissions dashboard.",
    });
  } catch (error) {
    console.error("Admissions API Route Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to parse application payload." },
      { status: 400 }
    );
  }
}
