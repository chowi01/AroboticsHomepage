"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: "포크형 AMR",
    subtitle: "Standard",
    description:
      "표준형 포크 리프트 방식의 자율주행 무인지게차로 팔레트 운반에 최적화되어 있습니다.",
    image: "/images/forklift/fork_type/COEX_SFAW 2022_thumbnail.png",
    specs: ["최대 하중: 1,500kg", "리프트 높이: 3,000mm", "운행 속도: 1.2m/s"],
    link: "/products/fork-type/standard",
  },
  {
    id: 2,
    name: "저상형 AMR",
    subtitle: "High Reach",
    description:
      "고소 작업에 특화된 저상형 무인지게차로 높은 선반까지 안전하게 접근할 수 있습니다.",
    image:
      "/images/forklift/type_low/factory_test_korea_steel_wire_thumbnail.png",
    specs: ["최대 하중: 1,000kg", "리프트 높이: 6,000mm", "운행 속도: 1.0m/s"],
    link: "/products/low-type/high-reach",
  },
  {
    id: 3,
    name: "3-Ways AMR",
    subtitle: "Multi-directional",
    description:
      "전후좌우 자유로운 이동이 가능한 3방향 무인지게차로 좁은 통로에서도 효율적으로 작업합니다.",
    image:
      "/images/forklift/fork_type/1T-12T-2T_3unit_cooperation_thumbnail.png",
    specs: ["최대 하중: 1,200kg", "리프트 높이: 4,500mm", "운행 속도: 0.8m/s"],
    link: "/products/fork-type/3ways",
  },
  {
    id: 4,
    name: "자동창고 시스템",
    subtitle: "Automated Storage",
    description:
      "완전 자동화된 창고 시스템으로 입출고부터 재고관리까지 통합 솔루션을 제공합니다.",
    image: "/images/forklift/fork_type/reach_rack_2ton_BM_thumbnail.png",
    specs: [
      "저장 용량: 1,000 팔레트",
      "처리 속도: 100회/시간",
      "자동화율: 95%",
    ],
    link: "/products/automated-storage",
  },
  {
    id: 5,
    name: "관제시스템",
    subtitle: "ACS Control",
    description:
      "통합 관제시스템으로 모든 AMR을 중앙에서 제어하고 최적의 작업 효율성을 제공합니다.",
    image:
      "/images/forklift/fork_type/low_type_amr_unmanned_forklift_chungbuk_tp_thumbnail.png",
    specs: ["동시 제어: 50대", "실시간 모니터링", "자동 경로 최적화"],
    link: "/products/control-system",
  },
  {
    id: 6,
    name: "자동충전기",
    subtitle: "Auto Charger",
    description:
      "무인 자동충전 시스템으로 AMR의 연속 운행을 보장하며 운영 효율성을 극대화합니다.",
    image: "/images/product-auto-charger.jpg",
    specs: ["충전 시간: 2시간", "배터리 수명: 8시간", "자동 도킹"],
    link: "/products/auto-charger",
  },
  {
    id: 7,
    name: "안전시스템",
    subtitle: "Safety System",
    description:
      "LiDAR와 AI 카메라를 활용한 다중 안전시스템으로 작업자와 장비의 안전을 보장합니다.",
    image: "/images/product-safety-system.jpg",
    specs: ["감지 범위: 5m", "반응 시간: 0.1초", "99.9% 정확도"],
    link: "/products/safety-system",
  },
  {
    id: 8,
    name: "AI 카메라 시스템",
    subtitle: "Vision AI",
    description:
      "첨단 영상 인식 기술로 정확한 물체 인식과 위치 추정을 제공하는 AI 카메라 시스템입니다.",
    image: "/images/product-ai-camera.jpg",
    specs: ["해상도: 4K", "인식 정확도: 99.5%", "실시간 처리"],
    link: "/products/ai-camera",
  },
];

export function ProductsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-classic">
        {/* Section Header - Classic Style */}
        <div className="section-header-classic">
          <h2 className="section-title-classic">AMR 제품 라인업</h2>
          <p className="section-subtitle-classic">
            다양한 물류 환경에 최적화된 AMR 제품군으로 고객의 요구사항에 맞는
            완벽한 솔루션을 제공합니다.
          </p>
        </div>

        {/* Products Grid with Horizontal Scroll */}
        <div className="relative">
          {/* Navigation Buttons - Classic Style */}
          <Button
            onClick={scrollLeft}
            variant="default"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 bg-opacity-80 hover:bg-gray-800 hover:bg-opacity-100 text-white w-14 h-14 rounded transition-all duration-300 shadow-xl"
            aria-label="이전 제품 보기"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={scrollRight}
            variant="default"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 bg-opacity-80 hover:bg-gray-800 hover:bg-opacity-100 text-white w-14 h-14 rounded transition-all duration-300 shadow-xl"
            aria-label="다음 제품 보기"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-80 product-card-classic group"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                  {product.image.endsWith(".pdf") ? (
                    <iframe
                      src={product.image}
                      className="absolute inset-0 w-full h-full"
                      title={product.name}
                    />
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-sm font-semibold bg-gray-900 text-white px-3 py-1 rounded">
                      {product.subtitle}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specifications - Classic Style */}
                  <div className="bg-gray-50 rounded p-3 mb-4">
                    {product.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-gray-700 py-1"
                      >
                        <span className="text-gray-900">•</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold transition-all duration-300"
                  >
                    <a href={product.link}>자세히 보기</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Classic Style */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-10 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              전체 제품 라인업 보기
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              에이로보틱스의 모든 AMR 제품과 상세 사양을 확인하고 비교해보세요.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gray-900 text-white px-8 py-6 h-auto rounded font-semibold text-base hover:bg-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <a href="/lineup">전체 라인업 보기</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
