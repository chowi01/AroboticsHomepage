import ImageMagnifier from "@/components/ui/ImageMagnifier";

export default function LowTypeLineupPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 mt-16 py-16">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              저상형 AMR 라인업
            </h1>
            <p className="text-xl text-gray-200">
              효율적인 물류 운송을 위한 저상형 AMR 제품군을 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="relative w-full h-auto">
            <ImageMagnifier
              src="/images/lineup/lineup_2.png"
              alt="저상형 AMR 라인업"
              width={1920}
              height={1080}
              zoom={3}
              lensSize={90}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
