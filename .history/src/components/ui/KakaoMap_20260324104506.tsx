"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    kakao: any;
  }
}

type KakaoMapProps = {
  address: string;
  companyName?: string;
  className?: string;
};

export default function KakaoMap({
  address,
  companyName = "에이로보틱스",
  className = "",
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    if (!mapRef.current) return;
    if (!window.kakao || !window.kakao.maps) return;

    const kakao = window.kakao;

    kakao.maps.load(() => {
      const container = mapRef.current;
      if (!container) return;

      // 기본 중심좌표(주소 변환 전 임시값)
      const defaultCenter = new kakao.maps.LatLng(37.5665, 126.978);

      const map = new kakao.maps.Map(container, {
        center: defaultCenter,
        level: 3, // 숫자가 작을수록 확대
      });

      // 확대/축소 컨트롤
      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      // 지도 타입 컨트롤(일반/스카이뷰)
      const mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 주소 -> 좌표 변환
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result: any[], status: string) => {
        if (status !== kakao.maps.services.Status.OK || !result.length) {
          console.error("주소 검색 실패:", address);
          return;
        }

        const lat = Number(result[0].y);
        const lng = Number(result[0].x);
        const position = new kakao.maps.LatLng(lat, lng);

        map.setCenter(position);

        const marker = new kakao.maps.Marker({
          map,
          position,
        });

        const infoWindow = new kakao.maps.InfoWindow({
          content: `
            <div style="padding:10px 14px; font-size:13px; line-height:1.5;">
              <strong>${companyName}</strong><br />
              ${address}
            </div>
          `,
        });

        infoWindow.open(map, marker);
      });

      // 리사이즈 대응
      const resizeHandler = () => {
        map.relayout();
      };

      window.addEventListener("resize", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    });
  }, [loaded, address, companyName]);

  return (
    <>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
      />
      <div
        ref={mapRef}
        className={className}
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
