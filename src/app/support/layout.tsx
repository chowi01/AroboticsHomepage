import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
