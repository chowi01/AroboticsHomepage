"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    kakao?: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => unknown;
        Map: new (
          container: HTMLElement,
          options: {
            center: unknown;
            level: number;
          },
        ) => unknown;
        Marker: new (options: { position: unknown }) => {
          setMap: (map: unknown) => void;
        };
      };
    };
  }
}

type Props = {
  address: string;
  companyName?: string;
  className?: string;
};

export default function KakaoMap({
  address,
  companyName = "에이로보틱스",
  className = "",
}: Props) {
  // const mapRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  console.log("KAKAO KEY:", process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY);
  useEffect(() => {
    if (!sdkLoaded) return;
    if (!mapRef.current) return;
    if (!window.kakao || !window.kakao.maps) return;

    window.kakao.maps.load(() => {
      const kakao = window.kakao;

      const container = mapRef.current;
      if (!container) return;

      const map = new kakao.maps.Map(container, {
        center: new kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      });

      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      const mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result: any[], status: string) => {
        if (status !== kakao.maps.services.Status.OK || !result.length) {
          console.error("주소 검색 실패:", address, status);
          return;
        }

        const position = new kakao.maps.LatLng(
          Number(result[0].y),
          Number(result[0].x),
        );

        map.setCenter(position);

        const marker = new kakao.maps.Marker({
          map,
          position,
        });

        const infoWindow = new kakao.maps.InfoWindow({
          content: `
            <div style="padding:8px 12px; font-size:13px; line-height:1.5;">
              <strong>${companyName}</strong><br />
              ${address}
            </div>
          `,
        });

        infoWindow.open(map, marker);
      });

      setTimeout(() => {
        map.relayout();
      }, 100);
    });
  }, [sdkLoaded, address, companyName]);

  return (
    <>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => setSdkLoaded(true)}
        onError={() => {
          console.error("카카오맵 SDK 로드 실패");
        }}
      />
      <div
        ref={mapRef}
        className={className}
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
