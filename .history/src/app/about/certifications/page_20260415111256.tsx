"use client";

const certifications = [
  {
    fileUrl: "/files/iso-45001.pdf",
    displayName: "ISO 인증",
  },
  {
    fileUrl: "/files/venture-cert.pdf",
    displayName: "벤처 인증",
  },
  {
    fileUrl: "/files/mainbiz-cert.pdf",
    displayName: "메인비즈 인증",
  },
  {
    fileUrl: "/files/lab-cert.pdf",
    displayName: "기술연구소 인증",
  },
];

const patents = [
  {
    fileUrl: "/files/01 특허증_지게차 안전운전지원장치(2023.09.01).pdf",
  },
  {
    fileUrl: "/files/02 특허증_지게차의 이물받이 장치(2025.02.11).pdf",
  },
  {
    fileUrl:
      "/files/06 AI카메라를 이용한 자율이동 로봇의 인체감지 안전시스템.pdf",
  },
  {
    fileUrl:
      "/files/03 특허증_AI카메라를 이용한 유인 지게차 안전운전 지원장치(2025.09.08).pdf",
  },
  {
    fileUrl: "/files/10-2024-0165895_이물 흡입 장치.pdf",
  },
  {
    fileUrl:
      "/files/05 특허증_자율이동 로봇의 랙 적재 안정성 강화장치(2025.09.09).pdf",
  },
];

function getFileName(fileUrl: string) {
  const fileName = fileUrl.split("/").pop() || "";
  return decodeURIComponent(fileName).replace(/\.pdf$/i, "");
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-16 bg-gradient-to-br from-gray-800 to-gray-900 py-16">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-classic">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              인증 및 특허
            </h1>
            <p className="text-xl text-gray-200">검증된 기술력과 혁신의 증명</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-white">
        <div className="container-classic">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">보유 인증</h2>
            <p className="text-lg text-gray-600">
              국내외 공인 기관으로부터 인정받은 기술력과 경영 시스템
            </p>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex max-w-[1200px] flex-wrap justify-start gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="w-[176px] md:w-[192px]">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="relative flex h-[240px] w-full items-center justify-center overflow-hidden bg-gray-100 md:h-[256px]">
                      <iframe
                        src={`${cert.fileUrl}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                        title={`certification-pdf-${index}`}
                        className="h-full w-full origin-center scale-[0.8] pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-transparent" />
                    </div>

                    <div className="border-t border-gray-100 bg-white px-3 py-3">
                      <p className="text-center text-sm font-medium leading-snug text-gray-700">
                        {cert.displayName}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="section-padding bg-transparent">
        <div className="container-classic">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">보유 특허</h2>
            <p className="text-lg text-gray-600">
              총 6건의 특허로 기술 혁신을 선도합니다
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-fit max-w-full pl-10 md:pl-20">
              <div className="flex flex-wrap justify-start gap-6">
                {patents.map((patent, index) => (
                  <div key={index} className="w-[176px] md:w-[192px]">
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                      <div className="relative flex h-[240px] w-full items-center justify-center overflow-hidden bg-gray-100 md:h-[256px]">
                        <iframe
                          src={`${patent.fileUrl}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                          title={`patent-pdf-${index}`}
                          className="h-full w-full origin-center scale-[0.8] pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-transparent" />
                      </div>

                      <div className="border-t border-gray-100 bg-white px-3 py-3">
                        <p
                          className="overflow-hidden text-center text-xs leading-snug text-gray-700"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                          title={getFileName(patent.fileUrl)}
                        >
                          {getFileName(patent.fileUrl)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              에이로보틱스는 지속적인 연구개발을 통해 AMR 분야의 핵심 기술을
              확보하고 있습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
