"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const solutions = [
  {
    title: "무인지게차 솔루션",
    description:
      "포크형, 저상형 등 다양한 형태의 자율주행 무인지게차로 효율적인 물류 자동화를 실현합니다.",
    image: "/images/forklift/fork_type/image_2.png",
    features: ["자율주행 기술", "AI 안전시스템", "다양한 형태", "맞춤형 제작"],
    link: "/products/amr-agv",
  },
  {
    title: "관제시스템 솔루션",
    description:
      "ACS/ATS 통합 관제시스템으로 모든 AMR을 중앙에서 효율적으로 제어하고 관리합니다.",
    image: "/images/dashboard/image_1.png",
    features: ["통합 관제", "실시간 모니터링", "경로 최적화", "데이터 분석"],
    link: "/solutions/control",
  },
];

export function SolutionsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-classic">
        {/* Section Header - Classic Style */}
        <div className="section-header-classic">
          <h2 className="section-title-classic">스마트 AMR 솔루션</h2>
          <p className="section-subtitle-classic">
            에이로보틱스의 첨단 기술과 검증된 경험을 바탕으로 <br />
            고객에게 최적화된 AMR 솔루션을 제공합니다.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((card, index) => (
            <div key={index} className="card-classic group">
              <div className="aspect-video relative overflow-hidden rounded-t-lg bg-gray-200 mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* Features - Classic List Style */}
              <div className="space-y-3 mb-8">
                {card.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="bg-gray-900 text-white px-8 py-4 h-auto font-semibold text-base hover:bg-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 w-full"
              >
                <a href={card.link}>둘러보기</a>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              맞춤형 솔루션이 필요하신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              고객의 물류 환경에 최적화된 AMR 솔루션을 제안해 드립니다.
            </p>
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-black text-white"
              asChild
            >
              <a href="/support/inquiry">상담 문의하기</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
