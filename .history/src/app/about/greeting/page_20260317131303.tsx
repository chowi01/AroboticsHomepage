import Image from "next/image";

export default function GreetingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 mt-16 py-16">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10">
          <div className="container-classic text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              대표이사 인사말
            </h1>
            <p className="text-xl text-gray-200">
              에이로보틱스와 함께 미래를 만들어갑니다
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="max-w-4xl mx-auto">
            {/* CEO Photo Placeholder */}
            {/* <div className="w-64 h-64 mx-auto mb-12 relative">
              <Image
                src="/images/company_sign.avif"
                alt="주식회사 에이로보틱스 회사명판"
                fill
                className="object-contain rounded-lg"
              />
            </div> */}
            <div className="text-center">
              <p className="text-9xl font-bold text-gray-900 mb-2">
                주식회사 에이로보틱스
              </p>
              {/* <p className="text-lg text-gray-800">
                  대표이사{" "}
                  <span className="font-bold text-gray-900">권재인</span>
                </p> */}
            </div>

            {/* Greeting Message */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                혁신과 신뢰로 물류 자동화의 미래를 열어갑니다
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                안녕하십니까,
                <br />
                A-ROBOTICS를 방문해 주셔서 감사합니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                에이로보틱스는 급변하는 시장의 요구에 대응하기 위한 차별화된
                솔루션 커스터마이징을 제공하는 전문 생산 기업입니다. AMR은
                운반하고자 하는 제품등의 목적물을 지정된 장소에서 목적지까지
                자동으로 운반하는 운반 로봇입니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                당사는 품질, 납기, 생산성, 안전 등에 핵심을 두고 고객의 요구를
                충족시켜 드릴 것이며 귀사의 물류시스템에 맞는 최적의 솔루션을
                제공해 드릴 것을 약속드립니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                끊임없는 연구개발과 혁신을 통해 고객 여러분께 최고의 가치를
                제공하는 기업이 되겠습니다. 앞으로도 많은 관심과 성원을
                부탁드립니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-12">감사합니다.</p>

              <div className="text-center">
                <p className="text-xl font-bold text-gray-900 mb-2">
                  주식회사 에이로보틱스
                </p>
                <p className="text-lg text-gray-800">
                  대표이사{" "}
                  <span className="font-bold text-gray-900">권재인</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
