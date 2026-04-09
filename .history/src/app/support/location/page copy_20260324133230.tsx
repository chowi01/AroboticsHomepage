import { Car, Mail, MapPin, Phone, Train } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function LocationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 mt-16 py-16">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              오시는 길
            </h1>
            <p className="text-xl text-gray-200">
              에이로보틱스를 찾아오시는 방법을 안내해 드립니다
            </p>
          </div>
        </div>
      </section>

      {/* Location Content */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg h-[480px] relative overflow-hidden shadow-lg">
                <Image
                  src="/images/map/map.avif"
                  alt="에이로보틱스 위치 지도"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Transportation Info */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-200 h-44 flex flex-col justify-center">
                  <div className="flex items-start">
                    <Car className="h-6 w-6 text-gray-900 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        자가용 이용시
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        네비게이션에 &ldquo;에이로보틱스&rdquo; 또는 주소를
                        입력하세요. 건물 내 주차장을 이용하실 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-200 h-44 flex flex-col justify-center">
                  <div className="flex items-start">
                    <Train className="h-6 w-6 text-gray-900 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        대중교통 이용시
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        지하철 1호선 송내역에서 시내버스 이용 후
                        <br />
                        서운일반산업단지입구 정류장 하차
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="h-[480px] flex flex-col">
                <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-200 flex-1 mb-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    연락처 정보
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">주소</p>
                        <p className="text-gray-600 text-sm">
                          (21072) 인천광역시 계양구
                          <br />
                          서운산단로2길 5
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">
                          전화번호
                        </p>
                        <p className="text-gray-600 text-sm">
                          대표전화: 032-584-9592
                          <br />
                          팩스: 032-555-9592
                          <br />
                          휴대폰 : 010-8423-9592
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">이메일</p>
                        <p className="text-gray-600 text-sm">
                          info@a-robotics.co.kr
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">
                          회사정보
                        </p>
                        <p className="text-gray-600 text-sm">
                          상호: (주)에이로보틱스
                          <br />
                          대표: 권재인
                          <br />
                          사업자번호: 135-88-02281
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                {/* <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-200 h-44 flex flex-col justify-center">
                  <h4 className="font-bold text-gray-900 mb-4">빠른 문의</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    방문 전 문의사항이 있으면 언제든지 연락주세요.
                  </p>

                  <Button asChild className="w-full">
                    <a href="/support/inquiry">문의하기</a>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
