import {
  BarChart,
  Cloud,
  Database,
  Monitor,
  Shield,
  Tablet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Monitor,
    title: "통합 모니터링",
    description:
      "모든 AMR의 실시간 위치, 상태, 작업 현황을 한 화면에서 모니터링할 수 있습니다.",
  },
  {
    icon: Cloud,
    title: "클라우드 연동",
    description:
      "클라우드 기반 시스템으로 언제 어디서나 접속하여 관리할 수 있습니다.",
  },
  {
    icon: Database,
    title: "데이터 분석",
    description:
      "빅데이터 분석을 통해 작업 효율성을 개선하고 최적의 운영 방안을 제시합니다.",
  },
  {
    icon: Shield,
    title: "보안 시스템",
    description:
      "엔터프라이즈급 보안 시스템으로 데이터와 시스템을 안전하게 보호합니다.",
  },
  {
    icon: BarChart,
    title: "성과 분석",
    description:
      "다양한 KPI 지표를 통해 AMR 운영 성과를 분석하고 개선점을 도출합니다.",
  },
  {
    icon: Tablet,
    title: "모바일 지원",
    description:
      "PC와 태블릿 모두 지원하여 현장에서도 편리하게 관제할 수 있습니다.",
  },
];

export default function ControlSystemPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                관제 시스템 PC, Tablet (ACS)
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                AMR Control System - 모든 AMR을 중앙에서 통합 관리하는 지능형
                관제 시스템으로 실시간 모니터링과 최적화된 작업 스케줄링을
                제공합니다.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-gray-900 text-white px-8 py-6 h-auto rounded font-semibold text-base hover:bg-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  <a href="/products/specifications">
                    상세 사양 보기
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent text-white px-8 py-6 h-auto rounded font-semibold text-base border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  <a href="/support/inquiry">
                    데모 요청
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                스마트한 통합 관제의 시작
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ACS(AMR Control System)는 다수의 AMR을 효율적으로 관리하고
                제어하는 통합 관제 시스템입니다. 실시간 위치 추적, 작업 할당,
                경로 최적화, 충돌 방지 등 모든 기능을 하나의 플랫폼에서
                제공합니다.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                직관적인 UI/UX 디자인으로 누구나 쉽게 사용할 수 있으며, PC와
                태블릿 모두 지원하여 사무실과 현장 어디서나 관제가 가능합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  <span className="text-gray-700">
                    최대 100대 AMR 동시 제어
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  <span className="text-gray-700">실시간 3D 맵 시각화</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  <span className="text-gray-700">AI 기반 경로 최적화</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
              <span className="text-gray-500 text-xl">ACS 시스템 화면</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-classic">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 기능</h2>
            <p className="text-lg text-gray-600">
              효율적인 AMR 운영을 위한 강력한 기능들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-classic text-center">
                  <div className="icon-container-classic mx-auto mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              시스템 구성
            </h2>
            <p className="text-lg text-gray-600">
              유연하고 확장 가능한 시스템 아키텍처
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                    <Monitor className="h-12 w-12 text-gray-900 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900">중앙 서버</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    모든 데이터를 통합 관리하는 메인 서버
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                    <Tablet className="h-12 w-12 text-gray-900 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900">클라이언트</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    PC/태블릿에서 접속 가능한 관제 화면
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                    <Database className="h-12 w-12 text-gray-900 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900">데이터베이스</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    모든 운영 데이터를 저장하고 분석
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-classic">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  PC 버전
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 대형 화면에 최적화된 UI</li>
                  <li>• 다중 모니터 지원</li>
                  <li>• 상세한 데이터 분석 기능</li>
                  <li>• 관리자 전용 기능</li>
                </ul>
              </div>
              <div className="card-classic">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  태블릿 버전
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 터치에 최적화된 인터페이스</li>
                  <li>• 현장에서 즉시 제어 가능</li>
                  <li>• 간편한 작업 지시</li>
                  <li>• 모바일 알림 기능</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container-classic text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ACS 시스템 도입을 고려하고 계신가요?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            데모 시연을 통해 ACS의 강력한 기능을 직접 경험해보세요. 전문
            엔지니어가 귀사에 최적화된 솔루션을 제안해 드립니다.
          </p>
          <Button
            asChild
            className="bg-gray-900 text-white px-8 py-6 h-auto rounded font-semibold text-base hover:bg-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            <a href="/support/inquiry">
              무료 데모 신청
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
