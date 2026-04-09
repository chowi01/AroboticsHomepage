{
  /* Patents Section */
}
<section className="section-padding bg-transparent">
  <div className="container-classic">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">보유 특허</h2>
      <p className="text-lg text-gray-600">
        총 6건의 특허로 기술 혁신을 선도합니다
      </p>
    </div>

    <div className="flex justify-center">
      <div className="w-fit max-w-full">
        <div className="flex flex-wrap justify-start gap-6">
          {patents.map((patent, index) => (
            <div key={index} className="w-[176px] md:w-[192px]">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="relative w-full h-[240px] md:h-[256px] bg-gray-100 overflow-hidden flex items-center justify-center">
                  <iframe
                    src={`${patent.fileUrl}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                    title={`patent-pdf-${index}`}
                    className="w-full h-full pointer-events-none scale-[0.8] origin-center"
                  />
                  <div className="absolute inset-0 bg-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-8 text-center">
      <p className="text-gray-600">
        에이로보틱스는 지속적인 연구개발을 통해 AMR 분야의 핵심 기술을 확보하고
        있습니다.
      </p>
    </div>
  </div>
</section>;
