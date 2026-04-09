"use client";

import { useState } from "react";
import { Award, Badge, Lightbulb, Shield, X } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO-45001:2018",
    subtitle: "안전보건경영시스템",
    description:
      "국제 표준 안전보건경영시스템 인증으로 안전한 작업환경을 보장합니다",
    date: "2023.11 취득",
    fileUrl: "/files/iso-45001.pdf",
  },
  {
    icon: Award,
    title: "벤처기업 인증",
    subtitle: "기술혁신형 중소기업",
    description: "우수한 기술력과 성장 잠재력을 인정받은 벤처기업입니다",
    date: "2024.03 취득",
    fileUrl: "/files/venture-cert.pdf",
  },
  {
    icon: Badge,
    title: "메인비즈",
    subtitle: "경영혁신형 중소기업",
    description: "체계적인 경영시스템과 혁신역량을 갖춘 우수 중소기업입니다",
    date: "2025.03 취득",
    fileUrl: "/files/mainbiz-cert.pdf",
  },
  {
    icon: Lightbulb,
    title: "기업부설연구소",
    subtitle: "R&D 전문 연구소",
    description: "지속적인 연구개발로 기술혁신을 선도하는 연구소입니다",
    date: "2022.07 설립",
    fileUrl: "/files/lab-cert.pdf",
  },
];

const patents = [
  {
    number: "제10-2575437호",
    title: "지게차 안전 운전 지원 장치",
    status: "등록",
    fileUrl: "/files/01 특허증_지게차 안전운전지원장치(2023.09.01).pdf",
  },
  {
    number: "제10-2768184호",
    title: "지게차의 이물받이 장치",
    status: "등록",
    fileUrl: "/files/02 특허증_지게차의 이물받이 장치(2025.02.11).pdf",
  },
  {
    number: "10-2025-0014856",
    title: "AI 카메라를 이용한 자율 이동 로봇의 인체감지 안전 시스템",
    status: "출원",
    fileUrl:
      "/files/06 AI카메라를 이용한 자율이동 로봇의 인체감지 안전시스템.pdf",
  },
  {
    number: "10-2025-0032732",
    title: "AI 카메라를 이용한 유인 지게차 안전 운전 지원장치",
    status: "출원",
    fileUrl:
      "/files/03 특허증_AI카메라를 이용한 유인 지게차 안전운전 지원장치(2025.09.08).pdf",
  },
  {
    number: "10-2024-0165895",
    title: "이물 흡입 장치",
    status: "출원",
    fileUrl: "/files/10-2024-0165895_이물 흡입 장치.pdf",
  },
  {
    number: "10-2025-0027877",
    title: "자율 이동 로봇의 랙 적재 안정성 강화장치",
    status: "출원",
    fileUrl:
      "/files/05 특허증_자율이동 로봇의 랙 적재 안정성 강화장치(2025.09.09).pdf",
  },
];

export default function CertificationsPage() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const openViewer = (fileUrl: string, title: string) => {
    setSelectedFile(fileUrl);
    setSelectedTitle(title);
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    setSelectedFile("");
    setSelectedTitle("");
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 mt-16 py-16">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center h-full">
          <div className="container-classic">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              인증 및 특허
            </h1>
            <p className="text-xl text-gray-200">검증된 기술력과 혁신의 증명</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">보유 인증</h2>
            <p className="text-lg text-gray-600">
              국내외 공인 기관으로부터 인정받은 기술력과 경영 시스템
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="card-classic group">
                  <div className="flex items-start">
                    <button
                      type="button"
                      onClick={() => openViewer(cert.fileUrl, cert.title)}
                      className="icon-container-classic flex-shrink-0 mr-6 cursor-pointer hover:scale-105 transition-transform"
                      title={`${cert.title} 파일 보기`}
                    >
                      <Icon className="h-8 w-8" />
                    </button>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-gray-700 font-medium mb-3">
                        {cert.subtitle}
                      </p>
                      <p className="text-gray-600 mb-3">{cert.description}</p>
                      <p className="text-sm text-gray-500">{cert.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-classic">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">보유 특허</h2>
            <p className="text-lg text-gray-600">
              총 8건의 특허로 기술 혁신을 선도합니다
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        번호
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        특허번호
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        발명의 명칭
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        상태
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {patents.map((patent, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-gray-700">{index + 1}</td>

                        <td className="px-6 py-4">
                          <button
                            type="button"
                            onClick={() =>
                              openViewer(
                                patent.fileUrl,
                                `${patent.number} - ${patent.title}`,
                              )
                            }
                            className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
                            title={`${patent.number} 특허증 보기`}
                          >
                            {patent.number}
                          </button>
                        </td>

                        <td className="px-6 py-4 text-gray-700">
                          {patent.title}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                              patent.status === "등록"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {patent.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                에이로보틱스는 지속적인 연구개발을 통해 AMR 분야의 핵심 기술을
                확보하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-6xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {selectedTitle}
              </h3>
              <button
                type="button"
                onClick={closeViewer}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="닫기"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            {/*           
            <div className="w-full h-[calc(85vh-73px)]">
              <iframe
                src={selectedFile}
                title={selectedTitle}
                className="w-full h-full"
              />
            </div>
            */}
            <div className="relative w-full h-[calc(85vh-73px)] overflow-hidden bg-gray-200">
              <iframe
                src={selectedFile}
                title={selectedTitle}
                className="w-full h-full"
              />
              <div className="absolute inset-0 pointer-events-none bg-white/10 backdrop-blur-[1.5px]" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
