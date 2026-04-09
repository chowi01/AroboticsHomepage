"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type KakaoLatLng = unknown;

type KakaoMapInstance = {
  setCenter: (position: KakaoLatLng) => void;
  addControl: (control: unknown, position: unknown) => void;
  relayout: () => void;
};

type GeocoderResult = {
  x: string;
  y: string;
};

declare global {
  interface Window {
    kakao?: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        Map: new (
          container: HTMLElement,
          options: {
            center: KakaoLatLng;
            level: number;
          },
        ) => KakaoMapInstance;
        Marker: new (options: {
          map?: KakaoMapInstance;
          position: KakaoLatLng;
        }) => unknown;
        InfoWindow: new (options: { content: string }) => {
          open: (map: KakaoMapInstance, marker: unknown) => void;
        };
        ZoomControl: new () => unknown;
        MapTypeControl: new () => unknown;
        ControlPosition: {
          RIGHT: unknown;
          TOPRIGHT: unknown;
        };
        services: {
          Geocoder: new () => {
            addressSearch: (
              address: string,
              callback: (result: GeocoderResult[], status: string) => void,
            ) => void;
          };
          Status: {
            OK: string;
          };
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
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    if (!sdkLoaded) return;

    const container = mapRef.current;
    const kakao = window.kakao;

    if (!container || !kakao) return;

    kakao.maps.load(() => {
      const currentKakao = window.kakao;
      const currentContainer = mapRef.current;

      if (!currentKakao || !currentContainer) return;

      const map = new currentKakao.maps.Map(currentContainer, {
        center: new currentKakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      });

      const zoomControl = new currentKakao.maps.ZoomControl();
      map.addControl(zoomControl, currentKakao.maps.ControlPosition.RIGHT);

      const mapTypeControl = new currentKakao.maps.MapTypeControl();
      map.addControl(
        mapTypeControl,
        currentKakao.maps.ControlPosition.TOPRIGHT,
      );

      const geocoder = new currentKakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result, status) => {
        if (status !== currentKakao.maps.services.Status.OK || !result.length) {
          console.error("주소 검색 실패:", address, status);
          return;
        }

        const position = new currentKakao.maps.LatLng(
          Number(result[0].y),
          Number(result[0].x),
        );

        map.setCenter(position);

        const marker = new currentKakao.maps.Marker({
          map,
          position,
        });

        const infoWindow = new currentKakao.maps.InfoWindow({
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
