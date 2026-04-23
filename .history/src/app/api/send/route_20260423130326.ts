// import { NextResponse } from "next/server";

// export async function POST() {
//   return NextResponse.json({
//     ok: false,
//     error: "메일 기능이 아직 설정되지 않았습니다.",
//   });
// }

import { EmailTemplate } from "@/lib/email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { ok: false, error: "메일 서버 키가 설정되지 않았습니다." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, phone, company, message } = body;

    console.log(
      "name, email, phone, company, message",
      name,
      email,
      phone,
      company,
      message,
    );

    const { data, error } = await resend.emails.send({
      from: "고객문의 <no-reply@a-robotics.co.kr>",
      to: ["info@a-robotics.co.kr", "w.i.cho@a-robotics.co.kr"],
      replyTo: email,
      subject: `[홈페이지 문의] ${company ? company + " - " : ""}${name}`,
      react: EmailTemplate({ name, email, phone, company, message }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        {
          ok: false,
          error: error.message || "메일 발송에 실패했습니다.",
        },
        { status: 500 },
      );
    }

    console.log("Resend success:", data);

    return NextResponse.json({
      ok: true,
      message: "메일이 정상적으로 발송되었습니다.",
      data,
    });
  } catch (error) {
    console.error("POST /api/send error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "서버 내부 오류로 메일 발송에 실패했습니다.",
      },
      { status: 500 },
    );
  }
}
