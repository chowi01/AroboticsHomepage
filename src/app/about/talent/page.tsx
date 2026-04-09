import {
  HandshakeIcon,
  Heart,
  Lightbulb,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const talentValues = [
  {
    icon: Lightbulb,
    title: "창의적 사고",
    description:
      "기존의 틀에 얽매이지 않고 새로운 아이디어와 혁신적인 솔루션을 제시하는 인재",
  },
  {
    icon: Target,
    title: "목표 지향적",
    description:
      "명확한 목표를 설정하고 끊임없는 노력으로 최고의 성과를 달성하는 인재",
  },
  {
    icon: HandshakeIcon,
    title: "협력과 소통",
    description: "팀워크를 중시하고 열린 마음으로 소통하며 함께 성장하는 인재",
  },
  {
    icon: Zap,
    title: "도전 정신",
    description:
      "실패를 두려워하지 않고 새로운 도전을 통해 성장의 기회를 만드는 인재",
  },
  {
    icon: Heart,
    title: "고객 중심",
    description:
      "고객의 니즈를 이해하고 최상의 가치를 제공하기 위해 노력하는 인재",
  },
  {
    icon: Users,
    title: "전문성",
    description:
      "자신의 분야에서 전문성을 갖추고 지속적으로 학습하며 발전하는 인재",
  },
];

const benefits = [
  {
    category: "근무 환경",
    items: [
      "자율 출퇴근제",
      "리프레시 휴가",
      "최신 장비 지원",
      "쾌적한 사무환경",
    ],
  },
  {
    category: "성장 지원",
    items: [
      "직무 교육 지원",
      "자격증 취득 지원",
      "컨퍼런스 참가 지원",
      "도서 구입비 지원",
    ],
  },
  {
    category: "복지 혜택",
    items: ["4대 보험", "퇴직연금", "건강검진 지원", "경조사 지원"],
  },
  {
    category: "문화 활동",
    items: ["팀 빌딩 활동", "동호회 지원", "생일 축하", "명절 선물"],
  },
];

export default function TalentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              인재상
            </h1>
            <p className="text-xl text-gray-200">
              에이로보틱스와 함께 미래를 만들어갈 인재를 찾습니다
            </p>
          </div>
        </div>
      </section>

      {/* Talent Values */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              에이로보틱스가 추구하는 인재상
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              혁신과 도전정신으로 물류 자동화의 미래를 함께 만들어갈 인재를
              기다립니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talentValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="icon-container-classic mx-auto mb-6 group-hover:bg-gray-700 transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-classic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                함께 성장하는 기업문화
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                에이로보틱스는 구성원의 성장이 곧 회사의 성장이라고 믿습니다.
                자유로운 소통과 창의적인 사고를 장려하며, 개인의 역량을 최대한
                발휘할 수 있는 환경을 제공합니다.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                수평적인 조직문화 속에서 자신의 아이디어를 자유롭게 제안하고,
                함께 고민하며 최고의 결과를 만들어가는 과정을 경험할 수
                있습니다.
              </p>
              <Button
                asChild
                className="bg-gray-900 text-white px-8 py-6 h-auto rounded font-semibold text-base hover:bg-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <a href="/careers">
                  채용정보 보기
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-4">
                    {benefit.category}
                  </h4>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-classic text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            에이로보틱스와 함께 성장하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            혁신적인 기술과 열정적인 동료들과 함께 물류 자동화의 미래를 만들어갈
            인재를 기다립니다.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              className="bg-white text-gray-900 px-8 py-6 h-auto rounded font-semibold text-base border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
            >
              <a href="/careers">
                채용공고 확인하기
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white px-8 py-6 h-auto rounded font-semibold text-base border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <a href="/support/inquiry">
                인사담당자 문의
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
