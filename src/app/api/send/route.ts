import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    ok: false,
    error: "메일 기능이 아직 설정되지 않았습니다.",
  });
}

// import { EmailTemplate } from "@/lib/email";
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   const body = await request.json();
//   const { name, email, phone, company, message } = body;

//   console.log(
//     "name, email, phone, company, message",
//     name,
//     email,
//     phone,
//     company,
//     message
//   );

//   try {
//     const { data, error } = await resend.emails.send({
//       from: "고객문의 <no-reply@a-robotics.co.kr>",
//       to: ["ahn@a-robotics.co.kr"],
//       subject: `[홈페이지 문의] ${company ? company + " - " : ""}${name}`,
//       react: EmailTemplate({ name, email, phone, company, message }),
//     });

//     if (error) {
//       return NextResponse.json({ error }, { status: 500 });
//     }

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
