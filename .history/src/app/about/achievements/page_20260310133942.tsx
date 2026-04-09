"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description?: string;
}

const developmentAchievements: Achievement[] = [
  { id: 1, title: "AMR 무인 지게차 개발 완료" },
  { id: 2, title: "AMR 무인 대차 리프트 TYPE 개발 완료" },
  { id: 3, title: "AMR 무인 대차 이적재 장치 TYPE 개발 완료" },
  { id: 4, title: "유인 지게차 안전운전 지원 장치 개발 완료" },
  { id: 5, title: "AMR 무인 지게차 이물받이 장치 개발 완료" },
  { id: 6, title: "AMR 무인 지게차 이물 자동 흡입 장치 개발 완료" },
  { id: 7, title: "AMR 무인 대차 랙 적재 안정성 강화 장치 개발 완료" },
  { id: 8, title: "AMR 무인 대차 제어 시스템 및 제어 방법 개발 완료" },
  { id: 9, title: "AMR 무인 지게차, 무인 대차 정지 정확도 향상 장치 개발 완료" },
  { id: 10, title: "AMR 무인 이동 로봇 AI-카메라를 이용한 인체감지 안전 시스템 개발 완료" },
  { id: 11, title: "유인 지게차 AI-카메라를 이용한 안전운전 지원 장치 개발 완료" },
];

const deliveryAchievements: Achievement[] = [
  { id: 1, title: "고려강선 1차 계약 납품 완료" },
  { id: 2, title: "고려강선 2차 계약 납품 완료", description: "AMR 리프트, 이적재 장치 TYPE" },
  { id: 3, title: "고려강선 3차 계약 납품 완료", description: "리프트 TYPE" },
  { id: 4, title: "충북테크노(조달청) 입찰 납품 완료", description: "AMR 무인 지게차, AMR 저상형" },
  { id: 5, title: "LG전자 계약 납품 완료", description: "AMR 무인 지게차" },
  { id: 6, title: "화신(LG전자) 계약 납품 완료", description: "AMR 무인 지게차" },
  { id: 7, title: "링크솔루션 계약 납품 완료", description: "AMR 무인 지게차" },
  { id: 8, title: "풍산금속 계약", description: "AMR 무인 지게차 - 7월 납품 예정" },
];

export default function AchievementsPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              개발 및 납품 실적
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
              에이로보틱스의 혁신적인 기술 개발과 성공적인 납품 사례를 소개합니다
            </p>
          </div>
        </div>
      </section>

      {/* Development Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              개발 실적
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              끊임없는 연구개발을 통해 물류 자동화 기술을 선도하고 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {developmentAchievements.map((achievement) => (
              <Card key={achievement.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {achievement.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                {achievement.description && (
                  <CardContent>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              납품 실적
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              다양한 산업 현장에서 검증된 에이로보틱스의 솔루션
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {deliveryAchievements.map((achievement) => (
              <Card key={achievement.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {achievement.title}
                      </CardTitle>
                      {achievement.description && (
                        <p className="mt-2 text-sm text-gray-600">{achievement.description}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            귀사의 물류 혁신을 함께 하겠습니다
          </h2>
          <p className="mt-4 text-xl text-red-100">
            검증된 기술력과 풍부한 경험으로 최적의 솔루션을 제공합니다
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-red-600 shadow-sm hover:bg-gray-100 transition-colors"
            >
              문의하기
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-red-600 transition-colors"
            >
              제품 둘러보기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}