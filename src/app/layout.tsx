import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next";

import { Noto_Sans_KR } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "A-ROBOTICS | 자율주행 무인지게차 전문 기업",
  description:
    "에이로보틱스 - 차별화된 AMR 솔루션으로 물류 효율성을 극대화하는 자율주행 무인지게차 전문 기업",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <html lang="ko">
        <body className={cn(notoSansKR.className)}>
          <Toaster />
          {children}
        </body>
      </html>
    </NuqsAdapter>
  );
}
