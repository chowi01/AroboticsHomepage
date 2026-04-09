"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Building, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

const companyInfo = {
  stats: [
    { label: "설립연도", value: "2021", suffix: "년" },
    { label: "특허보유", value: "8", suffix: "건" },
    { label: "납품실적", value: "18", suffix: "대" },
    { label: "서비스망", value: "10", suffix: "개 지역" },
  ],
  timeline: [
    { year: "2021.09", event: "AMR 포크형 무인지게차 개발 완료" },
    { year: "2021.11", event: "주식회사 에이로보틱스 법인설립" },
    { year: "2022.04", event: "코엑스 물류대전 전시회 참가" },
    { year: "2022.05", event: "저상형 AMR (무인 대차) 개발 완료" },
    { year: "2022.07", event: "기업부설연구소 설립" },
    { year: "2022.11", event: "킨텍스 건설 장비 전시회 참가" },
    { year: "2023.11", event: "ISO-45001.2018 인증 취득" },
    { year: "2024.03", event: "벤처기업 인증 취득" },
    { year: "2025.03", event: "메인비즈 취득" },
  ],
};

const technology = {
  features: [
    {
      icon: Award,
      title: "특허 기술력",
      description: "8건의 특허 보유로 검증된 기술력",
      details:
        "AI 카메라 안전시스템, 자율이동로봇 제어시스템 등 핵심 기술 특허 보유",
    },
    {
      icon: Users,
      title: "전문 인력",
      description: "분야별 전문가로 구성된 R&D팀",
      details: "로봇공학, AI, 소프트웨어 분야의 석박사급 전문 인력 보유",
    },
    {
      icon: TrendingUp,
      title: "지속적 혁신",
      description: "꾸준한 연구개발 투자와 기술 혁신",
      details: "매년 매출의 15% 이상을 R&D에 투자하여 기술 경쟁력 강화",
    },
  ],
};

const achievements = {
  clients: [
    {
      name: "고려강선",
      project: "소선 이송용 및 공보빈 이송용 AMR",
      quantity: "11대",
    },
    { name: "LG전자", project: "금형 소재 운반용 AMR", quantity: "1대" },
    { name: "충북테크노파크", project: "화장품 라인 AMR", quantity: "3대" },
    {
      name: "화신(LG전자)",
      project: "전기자동차 부품 생산라인 AMR",
      quantity: "2대",
    },
    { name: "링크솔루션", project: "3D 프린트 라인 AMR", quantity: "1대" },
  ],
  certifications: [
    "ISO-45001:2018 (안전보건경영시스템)",
    "벤처기업 인증",
    "메인비즈 인증",
    "기업부설연구소 설립",
  ],
};

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A-ROBOTICS 알아보기
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            혁신적인 기술과 검증된 실적으로 미래의 물류 자동화를 선도하는
            에이로보틱스입니다.
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12 bg-white shadow-sm">
            <TabsTrigger
              value="company"
              className="flex items-center space-x-2 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900"
            >
              <Building className="h-4 w-4" />
              <span>회사 정보</span>
            </TabsTrigger>
            <TabsTrigger
              value="technology"
              className="flex items-center space-x-2 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900"
            >
              <Award className="h-4 w-4" />
              <span>기술력</span>
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="flex items-center space-x-2 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900"
            >
              <TrendingUp className="h-4 w-4" />
              <span>고객 성과</span>
            </TabsTrigger>
          </TabsList>

          {/* Company Info Tab */}
          <TabsContent value="company">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  미래의 물류 자동화를 선도하는 기업
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  에이로보틱스는 차별화된 AMR 솔루션으로 고객의 물류 효율성을
                  극대화합니다. 급변하는 시장의 요구에 대응하기 위한 차별화된
                  솔루션 커스터마이징을 제공하는 전문 생산 기업입니다.
                </p>

                {/* Company Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {companyInfo.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 text-center shadow-sm"
                    >
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.value}
                        <span className="text-lg">{stat.suffix}</span>
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-black text-white"
                  asChild
                >
                  <a href="/about">자세히 알아보기</a>
                </Button>
              </div>

              {/* Timeline */}
              <div>
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">
                      주요 연혁
                    </h4>
                    <div className="space-y-4">
                      {companyInfo.timeline.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-16 text-sm font-medium text-gray-900 mt-1">
                            {item.year}
                          </div>
                          <div className="flex-1">
                            <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mb-2" />
                            <p className="text-gray-700 text-sm">
                              {item.event}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Technology Tab */}
          <TabsContent value="technology">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/technology-lab.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">기업부설연구소</h4>
                  <p className="text-sm opacity-90">
                    최첨단 R&D 시설에서 미래 기술을 개발합니다
                  </p>
                </div>
              </div>

              {/* Technology Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  검증된 기술력과 지속적인 혁신
                </h3>
                <div className="space-y-6">
                  {technology.features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-gray-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            {feature.description}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {feature.details}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Client Success Stories */}
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    주요 납품 실적
                  </h4>
                  <div className="space-y-4">
                    {achievements.clients.map((client, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-gray-900 pl-4"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-medium text-gray-900">
                            {client.name}
                          </h5>
                          <span className="text-sm font-semibold text-gray-900">
                            {client.quantity}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {client.project}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    인증 및 수상
                  </h4>
                  <div className="space-y-4">
                    {achievements.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-gray-900 flex-shrink-0" />
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h5 className="font-medium text-gray-900 mb-4">
                      품질 약속
                    </h5>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="text-xl font-bold text-gray-900 mb-1">
                          100%
                        </div>
                        <div className="text-xs text-gray-600">고객 만족도</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="text-xl font-bold text-gray-900 mb-1">
                          3년
                        </div>
                        <div className="text-xs text-gray-600">품질 보증</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CEO Message */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              대표이사 인사말
            </h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-gray-600 leading-relaxed text-center italic">
              &ldquo;A-ROBOTICS를 방문해 주셔서 감사합니다. 에이로보틱스는
              급변하는 시장의 요구에 대응하기 위한 차별화된 솔루션
              커스터마이징을 제공하는 전문 생산 기업입니다. AMR은 운반하고자
              하는 제품등의 목적물을 지정된 장소에서 목적지까지 자동으로
              운반하는 운반 로봇입니다. 당사는 품질, 납기, 생산성, 안전 등에
              핵심을 두고 고객의 요구를 충족시켜 드릴 것이며 귀사의 물류시스템에
              맞는 최적의 솔루션을 제공해 드릴 것을 약속드립니다.&rdquo;
            </blockquote>
            <div className="text-center mt-6">
              <p className="font-semibold text-gray-900">권재인 대표이사</p>
              <p className="text-sm text-gray-600">주식회사 에이로보틱스</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
