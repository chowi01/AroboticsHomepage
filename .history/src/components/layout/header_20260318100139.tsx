"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="A-ROBOTICS"
                  width={27}
                  height={27}
                />
                <span className="text-xl font-bold text-gray-900">
                  에이로보틱스
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu viewport={false} className="relative z-50">
                <NavigationMenuList className="flex items-center space-x-8">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                      회사소개
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-1 p-3 w-[200px]">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about/greeting"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">대표이사 인사말</div>
                            <div className="text-xs text-gray-600">
                              CEO 메시지
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about/history"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">연혁</div>
                            <div className="text-xs text-gray-600">
                              회사 발전 과정
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about/certifications"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">인증</div>
                            <div className="text-xs text-gray-600">
                              보유 인증 및 특허
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        {/* <NavigationMenuLink asChild>
                          <Link
                            href="/about/talent"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">인재상</div>
                            <div className="text-xs text-gray-600">
                              인재 채용 정보
                            </div>
                          </Link>
                        </NavigationMenuLink> */}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                      제품소개
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-1 p-3 w-[280px]">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/amr-agv"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">
                              무인 물류 로봇 (AMR/AGV)
                            </div>
                            <div className="text-xs text-gray-600">
                              자율주행 무인지게차
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        {/* <NavigationMenuLink asChild>
                          <Link
                            href="/products/control-system"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">
                              관제 시스템 PC,Tablet(ACS)
                            </div>
                            <div className="text-xs text-gray-600">
                              통합 관제 시스템
                            </div>
                          </Link>
                        </NavigationMenuLink> */}

                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/development-records"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">개발 및 납품실적</div>
                            <div className="text-xs text-gray-600">
                              개발 기술 및 납품 실적
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/case-studies"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">적용사례</div>
                            <div className="text-xs text-gray-600">
                              고객사 성공 스토리
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                      라인업
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-1 p-3 w-[220px]">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/lineup/standard"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">포크형 AMR</div>
                            <div className="text-xs text-gray-600">
                              자율주행 무인지게차
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/lineup/low-type"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">저상형 AMR</div>
                            <div className="text-xs text-gray-600">
                              자율주행 무인대차
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                      고객지원
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-1 p-3 w-[180px]">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/support/inquiry"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">제품문의</div>
                            <div className="text-xs text-gray-600">
                              견적 및 상담 요청
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/support/location"
                            className="block p-2 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">오시는길</div>
                            <div className="text-xs text-gray-600">
                              회사 위치 안내
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side - Contact & Search */}
            <div className="flex items-center space-x-4">
              {/* <div className="hidden md:flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-gray-600">KR</span>
              </div> */}

              {/* Mobile menu button */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        회사소개
                      </h3>
                      <div className="pl-4 space-y-2">
                        <Link
                          href="/about/greeting"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          대표이사 인사말
                        </Link>
                        <Link
                          href="/about/history"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          연혁
                        </Link>
                        <Link
                          href="/about/certifications"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          인증
                        </Link>

                        {/* <Link
                          href="/about/talent"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          인재상
                        </Link> */}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        제품소개
                      </h3>
                      <div className="pl-4 space-y-2">
                        <Link
                          href="/products/amr-agv"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          무인 운반 로봇 (AMR/AGV)
                        </Link>
                        <Link
                          href="/products/control-system"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          관제 시스템 PC,Tablet(ACS)
                        </Link>

                        <Link
                          href="/products/development-records"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          개발및납품실적
                        </Link>
                        <Link
                          href="/products/case-studies"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          적용사례
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        라인업
                      </h3>
                      <div className="pl-4 space-y-2">
                        <Link
                          href="/lineup/standard"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          Standard
                        </Link>
                        <Link
                          href="/lineup/high-reach"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          High Reach
                        </Link>
                        <Link
                          href="/lineup/3way"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          3-Way
                        </Link>
                        <Link
                          href="/lineup/low-type"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          저상형
                        </Link>
                        <Link
                          href="/lineup/automated-storage"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          자동창고 문류(E-Fork)
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        고객지원
                      </h3>
                      <div className="pl-4 space-y-2">
                        <Link
                          href="/support/inquiry"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          제품문의
                        </Link>
                        <Link
                          href="/support/location"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          오시는길
                        </Link>
                      </div>
                    </div>

                    {/* <div className="pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600">KR</span>
                      </div>
                    </div> */}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
