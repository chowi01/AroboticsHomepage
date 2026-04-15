"use client";

import { Play, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';

const videos = [
  {
    id: 1,
    title: "COEX 스마트팩토리 전시회 2022",
    description: "포크형 AMR 실제 구동 시연",
    thumbnail: "/images/forklift/fork_type/COEX_SFAW 2022_thumbnail.png",
    video: "/videos/forklift/fork_type/video_4.mp4",
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
    video: "/videos/forklift/fork_type/video_3.mp4",
    category: "저상형",
  },
  {
    id: 5,
    title: "고려강선 공장 테스트",
    description: "실제 공장 환경에서의 운영 테스트",
    thumbnail:
      "/images/forklift/type_low/factory_test_korea_steel_wire_thumbnail.png",
    video: "/videos/forklift/type_low/video_1.mp4",
    category: "적용사례",
  },
];

export function VideoGallerySection() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(
    null
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-classic">
        {/* Section Header */}
        <div className="section-header-classic">
          <h2 className="section-title-classic">AMR 동영상 갤러리</h2>
          <p className="section-subtitle-classic">
            실제 현장에서 운영되는 에이로보틱스 AMR의 모습을 확인하세요.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedVideo(video)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-200">
                  {video.thumbnail.endsWith(".pdf") ? (
                    <iframe
                      src={video.thumbnail}
                      className="absolute inset-0 w-full h-full"
                      title={video.title}
                    />
                  ) : (
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-gray-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="bg-black rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <video
                    src={selectedVideo.video}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 bg-gray-900 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-gray-300">{selectedVideo.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
