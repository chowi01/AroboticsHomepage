const developmentData = [
  "AMR 무인 지게차 개발 완료",
  "AMR 무인 대차 리프트 TYPE 개발 완료",
  "AMR 무인 대차 이적재 장치 TYPE 개발 완료",
  "유인 지게차 안전운전 지원 장치 개발 완료",
  "AMR 무인 지게차 이물받이 장치 개발 완료",
  "AMR 무인 지게차 이물 자동 흡입 장치 개발 완료",
  "AMR 무인 대차 랙 적재 안정성 강화 장치 개발 완료",
  "AMR 무인 대차 제어 시스템 및 제어 방법 개발 완료",
  "AMR 무인 지게차, 무인 대차 정지 정확도 향상 장치 개발 완료",
  "AMR 무인 이동 로봇 AI-카메라를 이용한 인체감지 안전 시스템 개발 완료",
  "유인 지게차 AI-카메라를 이용한 안전운전 지원 장치 개발 완료",
];

const deliveryData = [
  {
    company: "고려강선",
    contract: "1차 계약",
    status: "납품 완료",
    description: "포크형 AMR 무인지게차",
  },
  {
    company: "고려강선",
    contract: "2차 계약",
    status: "납품 완료",
    description: "AMR 리프트, 이적재 장치 TYPE",
  },
  {
    company: "고려강선",
    contract: "3차 계약",
    status: "납품 완료",
    description: "리프트 TYPE AMR",
  },
  {
    company: "충북테크노파크",
    contract: "조달청 입찰",
    status: "납품 완료",
    description: "AMR 무인 지게차, AMR 저상형",
  },
  {
    company: "LG전자",
    contract: "직접 계약",
    status: "납품 완료",
    description: "AMR 무인 지게차",
  },
  {
    company: "화신(LG전자)",
    contract: "직접 계약",
    status: "납품 완료",
    description: "AMR 무인 지게차",
  },
  {
    company: "L사",
    contract: "직접 계약",
    status: "납품 완료",
    description: "AMR 무인 지게차",
  },
  {
    company: "풍산",
    contract: "직접 계약",
    status: "7월 납품 예정",
    description: "AMR 무인 지게차",
  },
];

export default function DevelopmentRecordsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 mt-16 py-16">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              개발 및 납품 실적
            </h1>
            <p className="text-xl text-gray-200">
              에이로보틱스의 기술 개발과 납품 실적
            </p>
          </div>
        </div>
      </section>

      {/* Development Records Section */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                개발 실적
              </h2>
              <p className="text-lg text-gray-600">
                지속적인 연구개발을 통해 완성한 혁신 기술들
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentData.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Records Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-classic">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                납품 실적
              </h2>
              <p className="text-lg text-gray-600">
                검증된 기술력으로 다양한 기업에 성공적으로 납품
              </p>
            </div>

            <div className="space-y-6">
              {[...deliveryData].reverse().map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900 mr-4">
                          {item.company}
                        </h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {item.contract}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0 mt-4 md:mt-0">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          item.status === "납품 완료"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                지속적인 혁신과 성장
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                에이로보틱스는 11가지 핵심 기술 개발과 8개 주요 기업에 대한
                성공적인 납품을 통해 AMR 분야의 선도 기업으로 성장하고 있습니다.
                앞으로도 지속적인 연구개발과 고객 맞춤형 솔루션 제공을 통해 더
                나은 미래를 만들어가겠습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-2">
                    11
                  </div>
                  <div className="text-gray-600">개발 기술</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-2">8</div>
                  <div className="text-gray-600">납품 기업</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">고객 만족도</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
