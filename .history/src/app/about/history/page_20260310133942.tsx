const historyData = [
  { year: "2025", month: "03", content: "메인비즈 취득" },
  { year: "2024", month: "03", content: "벤처기업 인증 취득" },
  { year: "2023", month: "11", content: "ISO-45001.2018 인증 취득" },
  { year: "2022", month: "11", content: "킨텍스 건설 장비 전시회 참가" },
  { year: "2022", month: "07", content: "기업부설연구소 설립" },
  { year: "2022", month: "05", content: "저상형 AMR (무인 대차) 개발 완료" },
  { year: "2022", month: "04", content: "코엑스 물류대전 전시회 참가" },
  { year: "2021", month: "11", content: "주식회사 에이로보틱스 법인설립" },
  { year: "2021", month: "09", content: "AMR 포크형 무인지게차 개발 완료" },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 mt-16 py-16">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              회사 연혁
            </h1>
            <p className="text-xl text-gray-200">
              에이로보틱스의 발전과 성장의 역사
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                혁신과 도전의 발자취
              </h2>
              <p className="text-lg text-gray-600">
                2021년 설립 이후 지속적인 성장과 혁신을 이어가고 있습니다
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

              {/* Timeline Items */}
              {historyData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div
                        className={`flex items-center mb-3 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="text-3xl font-bold text-gray-900 mr-2">
                          {item.year}
                        </span>
                        <span className="text-xl text-gray-500">
                          .{item.month}
                        </span>
                      </div>
                      <p className="text-gray-700 font-medium">
                        {item.content}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-md"></div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-20 text-center">
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  계속되는 혁신의 여정
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  에이로보틱스는 설립 이후 짧은 기간 동안 AMR 분야의 선도
                  기업으로 성장했습니다. 앞으로도 지속적인 연구개발과 혁신을
                  통해 고객에게 최고의 가치를 제공하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
