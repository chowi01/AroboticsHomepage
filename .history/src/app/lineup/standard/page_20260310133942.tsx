import Image from 'next/image';

export default function StandardLineupPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 mt-16 py-16">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              포크형 AMR 라인업
            </h1>
            <p className="text-xl text-gray-200">
              다양한 용량과 사양의 포크형 AMR 제품군을 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="relative w-full h-auto">
            <Image
              src="/images/lineup/lineup_1.png"
              alt="포크형 AMR 라인업"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
