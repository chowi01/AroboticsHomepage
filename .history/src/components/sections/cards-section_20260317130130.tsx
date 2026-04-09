import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Settings, Trophy } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: Package,
    title: "제품 라인업",
    description:
      "포크형부터 저상형까지 다양한 용도에 맞는 자율주행 로봇 제품군",
    features: [
      "포크형 AMR (Standard, High Reach, 3-Ways)",
      "저상형 AMR (리프트형, 이적재장치형)",
      "자동창고 시스템 및 관제시스템",
      "안전시스템 및 AI 카메라 시스템",
    ],
    // buttonText: "둘러보기",
    // link: "/products/standard",
    // bgColor: "bg-gray-100",
    // iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: Settings,
    title: "맞춤형 솔루션",
    description:
      "고객의 물류 환경과 업무 특성을 분석하여 최적화된 커스터마이징 AMR 솔루션을 제공합니다",
    features: [
      "현장 분석 및 요구사항 파악",
      "맞춤형 AMR 설계 및 제작",
      "통합 관제시스템 구축",
      "운영 최적화 및 유지보수",
    ],
    // buttonText: "둘러보기",
    // link: "/products/case-studies",
    // bgColor: "bg-gray-100",
    // iconColor: "text-green-600",
  },
  {
    id: 3,
    icon: Trophy,
    title: "검증된 실적",
    description:
      "고려강선, LG전자, 충북테크노파크 등 다수의 성공적인 납품 사례",
    features: [
      "고려강선: 소선 이송용 AMR 11대 납품",
      "LG전자: 금형 소재 운반용 AMR 1대 납품",
      "충북테크노파크: 화장품 라인 AMR 3대 납품",
      "LG전자: 전기자동차 부품 생산라인 AMR 2대 납품",
    ],
    // buttonText: "둘러보기",
    // link: "/products/development-records",
    // bgColor: "bg-gray-100",
    // iconColor: "text-orange-600",
  },
];

export function CardsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            const IconComponent = card.icon;

            return (
              <Card
                key={card.id}
                className="hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
              >
                <CardContent className="p-0">
                  {/* Header with Icon */}
                  <div className={`${card.bgColor} p-6 pb-4`}>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${card.iconColor} bg-white rounded-lg mb-4`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="p-6 pt-4">
                    <ul className="space-y-3 mb-6">
                      {card.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      className="w-full group hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
                      asChild
                    >
                      <a
                        href={card.link}
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>{card.buttonText}</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional CTA Section */}
        {/* <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              에이로보틱스와 함께 물류 혁신을 시작하세요
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              검증된 기술력과 풍부한 경험을 바탕으로 고객의 물류 환경에 최적화된
              AMR 솔루션을 제공하여 생산성 향상과 비용 절감을 실현합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-black text-white"
                asChild
              >
                <a href="/support/inquiry">무료 상담 받기</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-gray-50"
                asChild
              >
                <a href="/about/history">회사 소개 보기</a>
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
