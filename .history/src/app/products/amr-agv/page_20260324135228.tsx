"use client";

import {
  AlertCircle,
  Battery,
  BookOpen,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  Clock,
  Forklift,
  MapPin,
  Navigation,
  Package,
  Ruler,
  Settings,
  Shield,
  ShoppingCart,
  Wifi,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AMRAgvPage() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                스마트공장
                <br /> 및<br /> 자동화창고를 위한 <br />
                <span className="text-gray-500">자율주행 무인지게차</span>
              </h1>
              <p className="text-xl text-gray-300">
                LiDAR SLAM 기술로 완전한 자율주행을 실현하여
                <br />
                스마트 물류시스템의 혁신을 이끕니다
              </p>
              <div className="flex gap-4">
                <Link href="/support/inquiry">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    제품 문의하기
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-500">
                    267회/일
                  </div>
                  <div className="text-sm text-gray-400">처리량</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-500">95.2%</div>
                  <div className="text-sm text-gray-400">가동률</div>
                </div>
                <Badge
                  variant="outline"
                  className="text-gray-400 border-gray-400"
                >
                  시스템 운영 중
                </Badge>
              </div>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-transparent rounded-lg" />
              <video
                src="/videos/forklift/fork_type/video_1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <p>브라우저가 비디오를 지원하지 않습니다.</p>
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">자율주행 무인지게차란?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              관제단에서 주어지는 작업지시를 자동으로, 시간제한 없이 연속적으로
              수행할 수 있는 차세대 지게차입니다
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Navigation className="h-12 w-12 mx-auto text-gray-600 mb-4" />
                <CardTitle>완전 자율주행</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  LiDAR SLAM 기술로 정확한 위치 파악 및<br /> 자동 이동
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-gray-600 mb-4" />
                <CardTitle>고도의 안전성</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  다중 안전센서와 실시간 충돌방지 시스템
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Battery className="h-12 w-12 mx-auto text-gray-600 mb-4" />
                <CardTitle>24시간 연속운전</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  자동충전 시스템으로 무중단 작업 가능
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wifi className="h-12 w-12 mx-auto text-gray-600 mb-4" />
                <CardTitle>시스템 연동</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  MES/WMS/ERP 등 상위시스템과 완벽 연동
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <Card>
              <CardHeader>
                <CardTitle>핵심 기술</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Navigation className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LiDAR SLAM</h4>
                    <p className="text-sm text-gray-600">
                      Light Detection And Ranging을 통한 정확한 위치인식
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Settings className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">실시간 매핑</h4>
                    <p className="text-sm text-gray-600">
                      환경 변화에 실시간으로 대응하는 동적 지도 생성
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Shield className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">다중 안전센서</h4>
                    <p className="text-sm text-gray-600">
                      충돌방지를 위한 다중 안전시스템
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>장점</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span>극한 작업환경에서도 운용 가능하여 작업자 보호</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span>일정한 가동시간으로 정확한 작업량 예측</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span>자동충전기능으로 가동률 최대화</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span>유인지게차 대비 높은 안전성</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">시스템 구성</h2>
            <p className="text-xl text-gray-600">
              상위 시스템과의 완벽한 연동으로 효율적인 물류 운영을 실현합니다
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-lg">
                    MES / WMS / WCS / ERP / PLC
                  </p>
                  <p className="text-gray-600">상위 시스템</p>
                </div>

                <div className="flex justify-center">
                  <ChevronRight className="h-8 w-8 text-gray-400 rotate-90" />
                </div>

                <Card className="bg-gray-50 border-gray-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">ACS</CardTitle>
                    <CardDescription className="text-base">
                      AMR Control System
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-700">
                      작업지시 수령, 현장 매핑, 노드설정, 픽업/드랍 지점 관리,
                      로봇간 트래픽 관리로 충돌방지 및 효율적 작업수행
                    </p>

                    {/* ACS 이미지 갤러리 */}
                    <div className="space-y-6 pt-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <Card
                            key={num}
                            className="overflow-hidden hover:shadow-lg transition-shadow bg-black"
                          >
                            <div
                              className="aspect-video relative cursor-pointer"
                              onClick={() =>
                                window.open(
                                  `/images/acs/ACS_${num}.png`,
                                  "_blank",
                                )
                              }
                            >
                              <Image
                                src={`/images/acs/ACS_${num}.png`}
                                alt={`ACS 시스템 화면 ${num}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform"
                              />
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center gap-8">
                  <ChevronRight className="h-8 w-8 text-gray-400 rotate-90" />
                  <ChevronRight className="h-8 w-8 text-gray-400 rotate-90" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle>무인지게차 #1</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Forklift className="h-16 w-16 mx-auto text-gray-600" />
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle>무인지게차 #2 (최대 100대)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Forklift className="h-16 w-16 mx-auto text-gray-600" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">주요 사양</h2>
            <p className="text-xl text-gray-600">
              산업현장의 까다로운 요구사항을 충족하는 고성능 사양
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">적재하중</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-600">
                  최소 100 kg
                  <br />
                  최대 3,500 kg
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">최대속도</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-600">
                  최소 0.1 m/s
                  <br />
                  최대 2.0 m/s
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">인상높이</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-600">
                  최소 0.2 m
                  <br />
                  최대 6.5 m
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">정지정밀도</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-600">±10mm</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">배터리</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-600">
                  24v ~ 48v
                  <br />
                  50A ~ 400A
                </p>
                <p className="text-sm text-gray-600">리튬인산철</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">운영시간</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-600">24시간</p>
                <p className="text-sm text-gray-600">연속</p>
              </CardContent>
            </Card>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="basic">기본 사양</TabsTrigger>
              <TabsTrigger value="control">제어 및 안전</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <Card>
                <CardHeader>
                  <CardTitle>기본 사양</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">유도방식</span>
                      <span className="font-semibold">LiDAR SLAM 방식 AMR</span>
                    </li>
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">구동방식</span>
                      <span className="font-semibold">
                        Single Drive Wheel (Traction & Steering)
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">주행방향</span>
                      <span className="font-semibold">전/후/곡선 주행</span>
                    </li>
                    {/* <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">차량중량</span>
                      <span className="font-semibold">
                        2,390kg (배터리 포함)
                      </span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span className="text-gray-600">차량치수</span>
                      <span className="font-semibold">
                        L2,077 × W1,110 × H2,285mm
                      </span>
                    </li> */}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="control">
              <Card>
                <CardHeader>
                  <CardTitle>제어 및 안전</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">AMR 주제어기</span>
                      <span className="font-semibold">Bluebotics / KC</span>
                    </li>
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">통신모듈</span>
                      <span className="font-semibold">산업용 WiFi</span>
                    </li>
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">안전센서</span>
                      <span className="font-semibold">
                        P&F LiDAR, SICK Safety 센서
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">충전방식</span>
                      <span className="font-semibold">자동 충전 방식</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span className="text-gray-600">표시등</span>
                      <span className="font-semibold">
                        3색등 (전원, 운전, 이상)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">주요 구성품</h2>
            <p className="text-xl text-gray-600">
              무인지게차의 핵심 구성품과 각 부품별 기능을 확인하세요
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative mb-12">
              <Image
                src="/images/amr_avg/key_components.png"
                alt="무인지게차 주요 구성품"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">AMR 구성품</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* 포크형 AMR 구성품 */}
                    <div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">
                              항법/SLAM 용 LiDAR
                            </h4>
                            <p className="text-sm text-gray-600">
                              정확한 위치 인식 및 자율주행
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">주행/경고 표시등</h4>
                            <p className="text-sm text-gray-600">
                              작업 상태 및 방향 표시
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">마스트 및 포크</h4>
                            <p className="text-sm text-gray-600">
                              화물 적재 및 리프팅
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">비상정지 버튼</h4>
                            <p className="text-sm text-gray-600">
                              즉시 작업 중단 시 사용
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">
                              포크탑 센서 (좌/우)
                            </h4>
                            <p className="text-sm text-gray-600">
                              포크 전방 감지
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">안전 센서 (전방)</h4>
                            <p className="text-sm text-gray-600">
                              전방 장애물 감지
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">
                              충격감지 비상 멈춤 범퍼
                            </h4>
                            <p className="text-sm text-gray-600">
                              충돌 시 즉시 정지
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 하이브리드 AMR 구성품 */}
                    <div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">주제어 장치 박스</h4>
                            <p className="text-sm text-gray-600">
                              전체 시스템 제어
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">주행/경고 표시등</h4>
                            <p className="text-sm text-gray-600">
                              작업 상태 및 방향 표시
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">
                              유/무인 전환 스위치
                            </h4>
                            <p className="text-sm text-gray-600">
                              수동/자동 모드 전환
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">
                              후방 안전 센서 (옵션)
                            </h4>
                            <p className="text-sm text-gray-600">
                              후방 장애물 감지 및 경고
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">비상정지 버튼</h4>
                            <p className="text-sm text-gray-600">
                              즉시 작업 중단 시 사용
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">
                              배터리 자동충전 포트
                            </h4>
                            <p className="text-sm text-gray-600">
                              무인 자동 충전 시스템
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">
                              구동/조향 바퀴 (하부)
                            </h4>
                            <p className="text-sm text-gray-600">
                              차량 이동 및 방향 제어
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Zones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">안전 구역 및 속도 제어</h2>
            <p className="text-xl text-gray-600">
              360도 SLAM 감지와 다층 안전 구역으로 완벽한 작업 안전을 보장합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>안전 구역 체계</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">응급정지 영역</h4>
                      <p className="text-sm text-gray-600">반경 0.2m</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">저속주행 영역</h4>
                      <p className="text-sm text-gray-600">반경 1m</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">감속주행 영역</h4>
                      <p className="text-sm text-gray-600">반경 3m</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-gray-600" />
                      <h4 className="font-semibold">360° SLAM 감지영역</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      전방향 LiDAR 스캔으로 주변 환경을 실시간 모니터링하여
                      장애물과 작업자를 즉시 감지합니다.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Safety zones visualization - centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Outer zone - 3m */}
                    <div className="absolute inset-0 border-4 border-blue-600 rounded-full"></div>
                    {/* Middle zone - 1m */}
                    <div className="absolute inset-8 border-4 border-yellow-300 rounded-full"></div>
                    {/* Inner zone - 0.2m */}
                    <div className="absolute inset-16 border-4 border-red-600 rounded-full"></div>
                  </div>
                </div>
                {/* Forklift icon - centered */}
                <div className="relative z-10 w-20 h-20 bg-gray-700 rounded flex items-center justify-center">
                  <Forklift className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <Badge
                    variant="outline"
                    className="border-red-600 bg-red-600 text-white"
                  >
                    감속 3m
                  </Badge>
                </div>
                <div>
                  <Badge
                    variant="outline"
                    className="border-yellow-500 bg-yellow-300 text-black"
                  >
                    저속 1m
                  </Badge>
                </div>
                <div>
                  <Badge
                    variant="outline"
                    className="border-blue-600 bg-blue-600 text-white"
                  >
                    정지 0.2m
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Checklist */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              적용 가능성 검토 체크리스트
            </h2>
            <p className="text-xl text-gray-600">
              현장 적용 전 반드시 확인해야 할 주요 체크포인트
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge className="mb-2">출발</Badge>
                <CardTitle>픽업지점 상태</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm">바닥상태: 평지 또는 랙</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm">팔레트 상태: 양면/단면 확인</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm">
                    회전 공간: 탑재 상태 회전 가능성
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2">이동</Badge>
                <CardTitle>이동구간 상태</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm">통로폭 / 교차주행 가능성</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm">직선구간 확보</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm">회전구간 여유 공간</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2">도착</Badge>
                <CardTitle>드랍지점 상태</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm">바닥상태: 평지 또는 랙</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm">하역 공간 확보</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm">탑재 상태 회전 가능성</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>공통 확인사항</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-8 w-8 text-gray-600" />
                  </div>
                  <p className="text-sm">실내/외 환경</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Ruler className="h-8 w-8 text-gray-600" />
                  </div>
                  <p className="text-sm">바닥 평탄도</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <AlertCircle className="h-8 w-8 text-gray-600" />
                  </div>
                  <p className="text-sm">조명 상태</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Settings className="h-8 w-8 text-gray-600" />
                  </div>
                  <p className="text-sm">구조물 위치</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Package className="h-8 w-8 text-gray-600" />
                  </div>
                  <p className="text-sm">팔레트 규격</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support & Warranty */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">품질보증 및 기술지원</h2>
            <p className="text-xl text-gray-600">
              도입부터 운영까지 전 과정을 책임지는 토탈 서비스
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-gray-600" />
                </div>
                <CardTitle>품질보증</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      신뢰성 있는 전동지게차 플랫폼 활용
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1년간 무상 보증</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">정기 정비로 성능 유지</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-10 w-10 text-gray-600" />
                </div>
                <CardTitle>기술지원</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">24시간 콜센터 운영</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">원격 온라인 지원</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">현장 방문수리 서비스</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-10 w-10 text-gray-600" />
                </div>
                <CardTitle>교육 및 훈련</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">전담인원 시스템 교육</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">매핑 및 포지셔닝 교육</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">현장 운영 및 관리 교육</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>구매 및 납기 안내</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <Clock className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">납기: 4~6개월</h4>
                      <p className="text-sm text-gray-600">
                        발주 후 제작 및 현장 설치 완료
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <ShoppingCart className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">유지보수 계약</h4>
                      <p className="text-sm text-gray-600">
                        연간 발주가의 5% 내 (1년 무상기간 후)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">문의하기</h2>
          <p className="text-xl mb-8">
            고객사 현장에 맞춰 주문 제작이 가능합니다.
            <br />
            자세한 상담과 현장 적용 검토를 원하시면 연락주세요
          </p>
          <div className="space-y-2 mb-8">
            <p className="text-lg">032-584-9592</p>
            <p className="text-gray-300">ahn@a-robotics.co.kr</p>
          </div>
          <div className="flex gap-4 justify-center">
            <Link href="/support/inquiry">
              <Button
                size="lg"
                variant="outline"
                className="text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white w-[170px]"
              >
                <ClipboardList className="mr-2 h-5 w-5" />
                제품 문의
              </Button>
            </Link>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
