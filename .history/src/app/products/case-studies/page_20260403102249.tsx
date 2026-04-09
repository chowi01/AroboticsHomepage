import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const caseStudies = [
  {
    id: 1,
    title: "자율주행무인대차 및 운용시스템 납품",
    company: "㈜ 고려강선",
    industry: "제조업",
    period: "2022.12.01 ~ 2023.02.28",
    location: "경북 포항시",
    products: ["LiDAR SLAM 방식 저상형 무인대차", "자율운송로봇"],
    challenge: "만보빈 공급 및 공보빈 회수 / 공급라인 무인대차 운용",
    solution:
      "출고라인 및 MES 연동하여 픽업 오더 수령, 주행 위치 구간별 속도 조정, AMR 경로 설정 화면 구성, 무인대차 이동 경로/상태/적재 장소 모니터링, 수동 경로 할당 기능, 배터리 모니터링 및 자동충전, 보빈 이/적재 영역 관제단 맵 구성",
    results: [
      "경북 포항 소재 고려강선 공장",
      "초기 2대, 확장 11대 (저상형 AMR) 운영",
      "현업 적용 및 주변 라인 확대 예정",
    ],
    images: [
      {
        src: "/images/case_study/reference1_1.png",
        alt: "소선 이송용 자율주행 이송로봇(AMR)",
        description: "소선 이송용 자율주행 이송로봇(AMR)",
      },
      {
        src: "/images/case_study/reference1_2.png",
        alt: "공보빈 이송용 자율주행 이송로봇(AMR)",
        description: "공보빈 이송용 자율주행 이송로봇(AMR)",
      },
      {
        src: "/images/case_study/reference1_3.png",
        alt: "소선 이송용 로봇+ 공보빈 이송용 로봇",
        description: "소선 이송용 로봇+ 공보빈 이송용 로봇",
      },
    ],
    testimonial:
      "에이로보틱스의 AMR 시스템 도입으로 공장 운영 효율성이 획기적으로 개선되었습니다. 24시간 무인 운송이 가능해져 생산성이 크게 향상되었습니다.",
    testimonialAuthor: "고려강선 공장장",
  },
  {
    id: 2,
    title: "자율주행무인지게차 및 운용시스템 납품",
    company: "LG전자 ㈜",
    industry: "전자제품 제조",
    period: "2023.12.19",
    location: "평택 LG전자 생산기술연구원",
    products: ["LiDAR SLAM 방식 무인지게차형 자율운송로봇"],
    challenge: "금형 소재 및 완제품 출고 라인 무인지게차 운용",
    solution:
      "원자재 입고 → 금형가공기계, 완성품 출고 → 외부 출고라인, 주행 위치별 속도 제어, 지게차 경로 설정 및 상태 모니터링, 수동 경로 할당 및 배터리 자동충전",
    results: [
      "평택 LG전자 생산기술연구원 금형 공장",
      "1대 (1.5톤, 인상높이 3m) 운영",
    ],
    images: [
      {
        src: "/images/case_study/reference2_1.png",
        alt: "자율주행 이송로봇(AMR) 정면",
        description: "자율주행 이송로봇(AMR) 정면",
      },
      {
        src: "/images/case_study/reference2_2.png",
        alt: "자율주행 이송로봇(AMR) 후면",
        description: "자율주행 이송로봇(AMR) 후면",
      },
      {
        src: "/images/case_study/reference2_3.png",
        alt: "자율주행 이송로봇(AMR) 우측",
        description: "자율주행 이송로봇(AMR) 우측",
      },
    ],
    testimonial:
      "LG전자의 까다로운 품질 기준을 만족하는 AMR 시스템을 공급해 주셔서 감사합니다.",
    testimonialAuthor: "LG전자 생산기술팀 팀장",
  },
  {
    id: 3,
    title: "자율주행무인지게차 & 무인대차 운용시스템 납품",
    company: "충북테크노파크",
    industry: "물류 및 유통",
    period: "2024.02.06",
    location: "충북 제천",
    products: ["LiDAR SLAM 방식 무인지게차", "무인대차 자율운송로봇"],
    challenge: "화장품 및 레이저 가공라인 무인지게차 & 무인대차 운용",
    solution:
      "화장품 완제품 이송: 무인대차, 출고 → 적재단 이송: 무인지게차, 경로 설정/상태 모니터링/자동충전, 디지털 트윈 인터페이스 구현",
    results: [
      "충북 제천 충북테크노파크 테스트베드",
      "지게차형 1대 (1.5톤, 3m), 저상형 2대 (300kg)",
      "협동로봇 2대, 3D 비전 2대 포함",
    ],
    images: [
      {
        src: "/images/case_study/reference3_1.png",
        alt: "무인대차와 무인지게차 협업",
        description: "무인대차와 무인지게차 협업",
      },
      {
        src: "/images/case_study/reference3_2.png",
        alt: "저상형AMR (무인대차)",
        description: "저상형AMR (무인대차)",
      },
      {
        src: "/images/case_study/reference3_3.png",
        alt: "포크형AMR (무인지게차) 자동충전",
        description: "포크형AMR (무인지게차) 자동충전",
      },
    ],
    testimonial:
      "충북테크노파크의 스마트 물류 시스템 구축 프로젝트에서 에이로보틱스의 전문성과 기술력이 빛을 발했습니다.",
    testimonialAuthor: "충북테크노파크 센터장",
  },
  {
    id: 4,
    title: "자율주행무인지게차 운용시스템 납품",
    company: "㈜ LG전자 - ㈜ 화신",
    industry: "전자부품 제조",
    period: "2024.05.20",
    location: "경북 영천",
    products: ["LiDAR SLAM 방식 무인지게차형 자율운송로봇"],
    challenge: "전기자동차 부품 생산라인 무인지게차 운용",
    solution:
      "반제품 공급 및 빈 대차 회수, 창고 → 작업라인 셔틀 방식 운송, 경로 설정/상태 모니터링/자동충전, 팔레트 이/적재 영역 구성",
    results: [
      "경북 영천 화신 공장",
      "지게차형 2대 (2톤, 2m)",
      "PLC 기반 시스템 인터페이스",
    ],
    images: [
      {
        src: "/images/case_study/reference4_1.png",
        alt: "무인지게차 2대",
        description: "무인지게차 2대",
      },
      {
        src: "/images/case_study/reference4_2.png",
        alt: "공급용 자재운반 (1창고)",
        description: "공급용 자재운반 (1창고)",
      },
      {
        src: "/images/case_study/reference4_3.png",
        alt: "Cooling Block 운반 (2창고)",
        description: "Cooling Block 운반 (2창고)",
      },
    ],
    testimonial:
      "다양한 제품 라인에 대응 가능한 유연한 AMR 시스템을 구축해 주셔서 생산 효율성이 크게 개선되었습니다.",
    testimonialAuthor: "화신 생산관리팀 차장",
  },
  {
    id: 5,
    title: "자율주행무인지게차 운용시스템 납품",
    company: "L사",
    industry: "제조업",
    period: "2024.06.19",
    location: "경기도 안양",
    products: ["LiDAR SLAM 방식 무인지게차형 자율운송로봇"],
    challenge: "3D 프린트라인 무인지게차 운용",
    solution:
      "공 플랫폼 → 프린트 → 세척 → 스태커로 단계별 이송, 경로 설정/상태 모니터링/자동충전, 이물질받이(Drip Pan) 장착",
    results: [
      "경기도 안양 L사 공장",
      "지게차형 1대 (1.5톤, 3m)",
      "OPC UA 기반 시스템 인터페이스",
    ],
    images: [
      {
        src: "/images/case_study/reference5_1.png",
        alt: "무인지게차 좌측면 & 이물질받이",
        description: "무인지게차 좌측면 & 이물질받이",
      },
      {
        src: "/images/case_study/reference5_2.png",
        alt: "이물질받이",
        description: "이물질받이",
      },
      {
        src: "/images/case_study/reference5_3.png",
        alt: "무인지게차 우측면 & 이물질받이",
        description: "무인지게차 우측면 & 이물질받이",
      },
    ],
    testimonial:
      "3D 프린트 라인에 최적화된 AMR 시스템을 구축해 주셔서 작업 효율성이 크게 향상되었습니다.",
    testimonialAuthor: "L사 생산팀장",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 mt-16 py-16">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              주요 적용사례
            </h1>
            <p className="text-xl text-gray-200">
              고객사의 성공 스토리와 구체적인 성과를 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-classic">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {[...caseStudies]
                .sort((a, b) => b.id - a.id)
                .map((study) => (
                  <Card key={study.id} className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4">
                        <div>
                          <CardTitle className="text-2xl text-gray-900 mb-2">
                            {study.title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            {study.company} · {study.industry}
                          </CardDescription>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                          <Badge variant="secondary" className="mr-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            {study.period}
                          </Badge>
                          <Badge variant="outline">
                            <MapPin className="h-4 w-4 mr-1" />
                            {study.location}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                              도입 제품
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {study.products.map((product, idx) => (
                                <Badge key={idx} variant="secondary">
                                  {product}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                              도전 과제
                            </h4>
                            <p className="text-gray-700">{study.challenge}</p>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                              구현 내용
                            </h4>
                            <p className="text-gray-700">{study.solution}</p>
                          </div>
                        </div>

                        <div>
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                              현장 적용
                            </h4>
                            <div className="space-y-3">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="flex items-center">
                                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                  <span className="text-gray-700">
                                    {result}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {study.images && (
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                현장 사진
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {study.images.map((image, idx) => (
                                  <div key={idx} className="relative group">
                                    <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
                                      <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                      />
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2 text-center">
                                      {image.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                귀하의 비즈니스에 최적화된 AMR 솔루션을 제안합니다
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                에이로보틱스의 검증된 AMR 기술로 귀하의 사업장도 스마트 팩토리로
                변화시켜 보세요. 전문 컨설턴트가 맞춤형 솔루션을 제안해드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/support/inquiry">무료 상담 신청</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products/amr-agv">제품 자세히 보기</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
