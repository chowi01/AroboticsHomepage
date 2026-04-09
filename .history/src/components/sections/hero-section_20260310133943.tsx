"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "자율주행 무인지게차",
    subtitle: "스마트 공장 및 물류센터를 위한 자율주행 무인지게차",
    description:
      "첨단 기술로 구현된 완전 자율주행 시스템으로 안전하고 효율적인 물류 자동화를 실현합니다.",
    buttonText: "자세히 보기",
    backgroundVideo: "/videos/forklift/fork_type/video_1.mp4",
    buttonLink: "/products/amr-agv",
  },
  // {
  //   id: 2,
  //   title: "관제시스템",
  //   subtitle: "ACS/ATS 시스템을 통한 효율적인 물류 관리",
  //   description:
  //     "통합 관제시스템으로 모든 AMR을 중앙에서 제어하고 최적의 경로를 자동으로 계획합니다.",
  //   buttonText: "시스템 보기",
  //   backgroundVideo: "/videos/forklift/fork_type/1T-12T-2T_3unit_cooperation.mp4",
  //   buttonLink: "/products/control-system",
  // },
  // {
  //   id: 3,
  //   title: "안전성",
  //   subtitle: "AI 카메라와 LiDAR를 통한 안전한 작업환경",
  //   description:
  //     "다중 센서 융합 기술로 장애물을 실시간 감지하여 사고를 예방하고 안전한 작업환경을 보장합니다.",
  //   buttonText: "안전 기술",
  //   backgroundVideo: "/videos/forklift/type_low/factory_test_korea_steel_wire.mp4",
  //   buttonLink: "/technology/safety",
  // },
  {
    id: 2,
    title: "다양한 라인업",
    subtitle: "포크형부터 저상형까지 다양한 AMR 솔루션",
    description:
      "고객의 다양한 요구사항에 맞춰 최적화된 AMR 제품군을 제공합니다.",
    buttonText: "제품 라인업",
    backgroundVideo: "/videos/forklift/fork_type/video_2.mp4",
    buttonLink: "/lineup/standard",
  },
  {
    id: 3,
    title: "검증된 성과",
    subtitle: "고려강선, LG전자 등 다수 납품 실적",
    description:
      "다양한 산업 분야에서 검증된 성능과 신뢰성을 바탕으로 고객 만족을 실현하고 있습니다.",
    buttonText: "적용 사례",
    backgroundVideo: "/videos/forklift/fork_type/video_3.mp4",
    buttonLink: "/products/case-studies",
  },
  {
    id: 4,
    title: "혁신 기술",
    subtitle: "특허 보유 및 지속적인 기술 개발",
    description:
      "8건의 특허를 보유하고 있으며, 지속적인 R&D를 통해 미래 기술을 선도합니다.",
    buttonText: "기술 혁신",
    backgroundVideo: "/videos/forklift/fork_type/video_3.mp4",
    buttonLink: "/about/patents",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 안전한 슬라이드 인덱스 확인
  const currentSlideData = slides[currentSlide] || slides[0];

  useEffect(() => {
    console.log("현재 슬라이드:", currentSlide, "총 슬라이드:", slides.length);
    console.log("현재 비디오 경로:", currentSlideData.backgroundVideo);
  }, [currentSlide, currentSlideData]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % slides.length;
        console.log("슬라이드 변경:", prev, "→", nextSlide);
        return nextSlide;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // const goToPrevious = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  //   setIsAutoPlaying(false);
  //   setTimeout(() => setIsAutoPlaying(true), 10000);
  // };

  // const goToNext = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   setIsAutoPlaying(false);
  //   setTimeout(() => setIsAutoPlaying(true), 10000);
  // };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
      {/* Background Slides */}
      {/* {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={slide.backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))} */}

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                console.log("Video 로딩 에러:", slide.backgroundVideo);
                console.error("Video error:", e);
              }}
              onLoadStart={() => {
                console.log("Video 로딩 시작:", slide.backgroundVideo);
              }}
              onCanPlay={() => {
                console.log("Video 재생 준비됨:", slide.backgroundVideo);
              }}
            >
              <source src={slide.backgroundVideo} type="video/mp4" />
              비디오를 지원하지 않는 브라우저입니다.
            </video>
          </div>
        ))}
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-1" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container-classic w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {currentSlideData.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-100 mb-6 font-medium">
                {currentSlideData.subtitle}
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {currentSlideData.description}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gray-900 text-white px-8 py-4 h-auto rounded font-semibold text-base hover:bg-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <a
                  href={currentSlideData.buttonLink}
                  className="inline-flex items-center group"
                >
                  {currentSlideData.buttonText}
                  <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* AMR Video Display */}
            <div className="hidden lg:block relative">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <div className="w-full h-[400px] rounded-lg shadow-2xl overflow-hidden relative bg-gray-800">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          console.log(
                            "Video 로딩 에러:",
                            slide.backgroundVideo
                          );
                          console.error("Video error:", e);
                        }}
                        onLoadStart={() => {
                          console.log(
                            "Video 로딩 시작:",
                            slide.backgroundVideo
                          );
                        }}
                        onCanPlay={() => {
                          console.log(
                            "Video 재생 준비됨:",
                            slide.backgroundVideo
                          );
                        }}
                      >
                        <source src={slide.backgroundVideo} type="video/mp4" />
                        비디오를 지원하지 않는 브라우저입니다.
                      </video>
                    </div>
                  ))}
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-600 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Classic Style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <Button
            key={index}
            onClick={() => goToSlide(index)}
            variant="ghost"
            className={`h-2 p-0 rounded-full transition-all duration-300 hover:bg-transparent ${
              index === currentSlide
                ? "bg-gray-400 hover:bg-gray-400 w-12"
                : "bg-gray-200 hover:bg-gray-200 hover:bg-opacity-60 w-2"
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>

      {/* Slide Info - Classic Style */}
      {/* <div className="absolute bottom-8 right-8 z-20 text-white text-sm font-medium">
        <span className="opacity-60">슬라이드</span> {currentSlide + 1}{" "}
        <span className="opacity-60">/ {slides.length}</span>
      </div> */}
    </section>
  );
}
