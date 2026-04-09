"use client";

import Image from "next/image";

const certifications = [
  {
    // title: "ISO-45001:2018",
    thumbnailUrl: "/files/so-45001.pdf",
  },
  {
    // title: "벤처기업 인증",
    thumbnailUrl: "/files/venture-cert.pdf",
  },
  {
    // title: "메인비즈",
    thumbnailUrl: "/files/mainbiz-cert.pdf",
  },
  {
    // title: "기업부설연구소",
    thumbnailUrl: "/files/cslab-cert.pdf",
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
              보유 중인 인증서를 썸네일 형태로 확인할 수 있습니다
            </p>
          </div>

          <div className="mb-20">
            <div className="flex flex-nowrap gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[220px] md:w-[240px]"
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="relative w-full h-[300px] md:h-[320px] bg-gray-100">
                      <Image
                        src={cert.thumbnailUrl}
                        alt={cert.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="px-4 py-3">
                      <h3 className="text-base font-bold text-gray-900 text-center break-keep">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                          <a
                            href={patent.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
                            title={`${patent.number} 특허증 보기`}
                          >
                            {patent.number}
                          </a>
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
    </main>
  );
}
