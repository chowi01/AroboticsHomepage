"use client";

import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  {
    title: "ISO-45001:2018",
    description: "안전보건경영시스템 인증",
    file: "/images/certifications/cert_etc/safety_health_management_system_certificate.png",
    date: "2023.11",
  },
  {
    title: "벤처기업 인증",
    description: "기술혁신형 벤처기업",
    file: "/images/certifications/cert_etc/venture_certification_a-robotics.png",
    date: "2024.03",
  },
  {
    title: "메인비즈 인증",
    description: "경영혁신형 중소기업",
    file: "/images/certifications/cert_etc/mainbiz_a-robotics.png",
    date: "2025.03",
  },
  {
    title: "기업부설연구소",
    description: "정부인정 연구소",
    file: "/images/certifications/cert_etc/corporate_research_institute_a-robotics.png",
    date: "2022.07",
  },
];

const patents = [
  {
    title: "지게차 안전 운전 지원 장치",
    number: "제10-2575437호",
    type: "등록",
    file: "/images/certifications/pat_reg/patent_cert_forklift_safety_device.jpg",
  },
  {
    title: "지게차의 이물받이 장치",
    number: "제10-2768184호",
    type: "등록",
    file: "/images/certifications/pat_reg/patent_cert_forklift_debris_catcher.jpg",
  },
  {
    title: "AI 카메라를 이용한 자율 이동 로봇의 인체감지 안전 시스템",
    number: "10-2025-0014856",
    type: "출원",
    file: "/download/pat_app/patent_app_ai_camera_amr_human_detection_safety.pdf",
  },
  {
    title: "AI 카메라를 이용한 유인 지게차 안전 운전 지원장치",
    number: "10-2025-0032732",
    type: "출원",
    file: "/download/pat_app/patent_app_ai_camera_forklift_safety_support.pdf",
  },
  {
    title: "이물 흡입 장치",
    number: "10-2024-0165895",
    type: "출원",
    file: "/download/pat_app/patent_app_debris_suction_device.pdf",
  },
  {
    title: "자율 이동 로봇의 랙 적재 안정성 강화장치",
    number: "10-2025-0027877",
    type: "출원",
    file: "/download/pat_app/patent_app_amr_rack_loading_stability_device.pdf",
  },
];

export function CertificationsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-classic">
        {/* Section Header */}
        <div className="section-header-classic">
          <h2 className="section-title-classic">인증 및 특허</h2>
          <p className="section-subtitle-classic">
            검증된 기술력과 신뢰성을 바탕으로 고객에게 최상의 품질을 보증합니다.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            인증 현황
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => window.open(cert.file, "_blank")}
              >
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative bg-gray-100">
                    {/*  <iframe
                      src={cert.file}
                      className="absolute inset-0 w-full h-full"
                      title={cert.title}
                    /> */}
                    <Image src={cert.file} alt={cert.title} fill />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {cert.description}
                    </p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Patents Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            특허 보유 현황
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patents.map((patent, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => window.open(patent.file, "_blank")}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`px-3 py-1 rounded text-xs font-semibold ${
                        patent.type === "등록"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {patent.type}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mt-3 mb-2">
                    {patent.title}
                  </h4>
                  <p className="text-sm text-gray-600">{patent.number}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Patents Note */}
          <div className="mt-8 text-center">
            <Card className="bg-gray-50 border-gray-200 inline-block">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  <span className="font-semibold">총 8건</span>의 특허를
                  보유하고 있으며, 지속적인 R&D를 통해 기술 혁신을 추구하고
                  있습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
