import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Package,
  Wrench,
} from "lucide-react";

const supportCards = [
  {
    id: 1,
    icon: Building2,
    title: "대리점 찾기",
    description: "전국 서비스 네트워크",
    details:
      "전국 주요 지역에 위치한 공식 대리점을 통해 빠르고 정확한 서비스를 제공합니다.",
    features: [
      "전국 10개 지역 서비스망",
      "신속한 현장 출장 서비스",
      "지역별 전문 기술진 배치",
      "24시간 긴급 출동 서비스",
    ],
    buttonText: "대리점 찾기",
    link: "/dealers",
    bgGradient: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    icon: Wrench,
    title: "A/S 서비스",
    description: "신속한 기술 지원",
    details:
      "전문 기술진이 제공하는 체계적인 A/S 서비스로 AMR의 최적 성능을 유지합니다.",
    features: [
      "예방 정비 및 점검 서비스",
      "원격 진단 시스템 운영",
      "정품 부품 신속 공급",
      "정기 교육 및 기술 지원",
    ],
    buttonText: "서비스 신청",
    link: "/support/service",
    bgGradient: "from-green-500 to-green-600",
  },
  {
    id: 3,
    icon: Package,
    title: "부품 및 액세서리",
    description: "정품 부품 공급",
    details:
      "AMR의 최적 성능 유지를 위한 정품 부품과 다양한 액세서리를 공급합니다.",
    features: [
      "100% 정품 부품 보장",
      "신속한 부품 공급 시스템",
      "맞춤형 액세서리 제작",
      "재고 관리 및 자동 발주",
    ],
    buttonText: "부품 주문",
    link: "/support/parts",
    bgGradient: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "교육 및 안전",
    description: "운영자 교육 프로그램",
    details: "AMR 운영자와 관리자를 위한 체계적인 교육 프로그램을 제공합니다.",
    features: [
      "초보자용 기초 교육과정",
      "고급 운영자 전문과정",
      "안전 관리 인증 프로그램",
      "정기 보수교육 및 업데이트",
    ],
    buttonText: "교육 신청",
    link: "/support/education",
    bgGradient: "from-orange-500 to-orange-600",
  },
];

export function SupportSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A-ROBOTICS 지원
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            고객의 성공적인 AMR 운영을 위해 전문적이고 체계적인 지원 서비스를
            제공합니다.
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportCards.map((card) => {
            const IconComponent = card.icon;

            return (
              <Card
                key={card.id}
                className="hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-0">
                  {/* Header with Gradient Background */}
                  <div
                    className={`bg-gradient-to-r ${card.bgGradient} p-6 text-white`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4 group-hover:bg-white/30 transition-colors duration-200">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {card.details}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {card.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-xs text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
                      asChild
                    >
                      <a
                        href={card.link}
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>{card.buttonText}</span>
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Support Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              긴급 지원 서비스
            </h3>
            <p className="text-gray-600 mb-6">
              AMR 운영 중 긴급상황 발생 시 24시간 전문 기술진이 신속하게
              대응합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-gray-900">
                <div className="w-3 h-3 bg-gray-900 rounded-full animate-pulse" />
                <span className="font-semibold text-lg">
                  긴급 상황 24시간 지원
                </span>
              </div>
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-black text-white"
              >
                <a href="tel:1588-0000" className="flex items-center space-x-2">
                  <span>긴급 연락: 1588-0000</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              더 자세한 지원이 필요하신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              전문 상담원이 고객의 상황에 맞는 최적의 지원 방안을 제안해
              드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-black text-white"
                asChild
              >
                <a href="/contact">상담 문의하기</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-gray-50"
                asChild
              >
                <a href="/support">지원 센터 방문</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
