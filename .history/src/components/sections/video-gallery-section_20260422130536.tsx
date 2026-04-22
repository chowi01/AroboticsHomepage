"use client";

import { Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    id: 1,
    title: "COEX 스마트팩토리 전시회 2022",
    description: "포크형 AMR 실제 구동 시연",
    thumbnail: "/images/forklift/fork_type/COEX_SFAW 2022_thumbnail.png",
    video: "/videos/forklift/fork_type/video_3.mp4",
    category: "전시회",
  },
  {
    id: 2,
    title: "3대 협업 시스템",
    description: "1톤, 1.2톤, 2톤 AMR의 협업 작업",
    thumbnail:
      "/images/forklift/fork_type/1T-12T-2T_3unit_cooperation_thumbnail.png",
    video: "/videos/forklift/fork_type/video_1.mp4",
    category: "협업시스템",
  },
  {
    id: 3,
    title: "리치형 랙 작업",
    description: "2톤 리치형 AMR의 고소 작업",
    thumbnail: "/images/forklift/fork_type/reach_rack_2ton_BM_thumbnail.png",
    video: "/videos/forklift/fork_type/video_2.mp4",
    category: "리치형",
  },
  {
    id: 4,
    title: "저상형 AMR + 무인지게차",
    description: "충북테크노파크 납품 사례",
    thumbnail:
      "/images/forklift/fork_type/low_type_amr_unmanned_forklift_chungbuk_tp_thumbnail.png",
    video: "/videos/forklift/fork_type/video_5.mp4",
    category: "저상형",
  },
  {
    id: 5,
    title: "현장 테스트",
    description: "실제 공장 환경에서의 운영 테스트",
    thumbnail:
      "/images/forklift/type_low/factory_test_korea_steel_wire_thumbnail.png",
    video: "/videos/forklift/type_low/video_1.mp4",
    category: "적용사례",
  },
];

export function VideoGallerySection() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(
    null,
  );

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      window.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-classic">
        <div className="section-header-classic">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AMR 동영상 갤러리
          </h2>
          <p className="section-subtitle-classic">
            실제 현장에서 운영되는 에이로보틱스 AMR의 모습을 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <CardContent className="p-0">
                <button
                  type="button"
                  onClick={() => setSelectedVideo(video)}
                  className="group relative block w-full text-left"
                  aria-label={`${video.title} 영상 재생`}
                >
                  <div className="relative aspect-video bg-gray-200">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">
                        <Play className="ml-1 h-8 w-8 text-gray-900" />
                      </div>
                    </div>

                    <div className="absolute left-4 top-4">
                      <span className="rounded bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                        {video.category}
                      </span>
                    </div>
                  </div>
                </button>

                <div className="p-4">
                  <h3 className="mb-1 font-semibold text-gray-900">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-xl border-4 border-white bg-black shadow-2xl">
                {/* 팝업 안쪽 닫기 버튼 */}
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-black/80 text-white shadow-xl transition-all duration-200 hover:scale-110 hover:bg-white hover:text-black"
                  aria-label="팝업 닫기"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="aspect-video bg-black">
                  <video
                    key={selectedVideo.video}
                    src={selectedVideo.video}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full"
                  />
                </div>

                <div className="border-t border-white/20 bg-gray-900 p-6 text-white">
                  <h3 className="mb-2 pr-12 text-xl font-semibold">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-gray-300">{selectedVideo.description}</p>
                  <p className="mt-3 text-sm text-gray-400">
                    ESC 키 또는 우측 상단 닫기 버튼으로 팝업을 닫을 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
