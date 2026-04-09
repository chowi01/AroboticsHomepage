import { Facebook, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <Image src="/logo.png" alt="A-ROBOTICS" width={40} height={40} />
            <span className="text-3xl font-bold">A-ROBOTICS</span>
          </div>
          <div className="space-y-1 text-sm text-gray-400 mb-3">
            <div>
              상호 : (주)에이로보틱스 / 사업자번호 : 135-88-02281 / 대표 :
              권재인
            </div>
            <div>사업장 주소 : (21072) 인천 계양구 서운단로2길 5</div>
            <div>
              전화 032-584-9592 / 팩스 032-555-9592 / 이메일
              info@a-robotics.co.kr
            </div>
          </div>

          {/* Copyright and Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              Copyright (C) 2021 ~ 2026 A-ROBOTICS CO., LTD.. All Rights
              Reserved.
            </div>

            {/* Social Network Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/channel/UCYlS-v05SBLGwEABNlOfaqQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/people/%EC%95%88%EC%9D%B8%EC%84%B1/pfbid031VsiPZvJQDg4NVK1sxHwGaRKPNcNp3oeuQ3J5FxxdFamiW7aotsn4NigNXhJGn5Al/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a
                href="https://instagram.com/arobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
              {/* <a
                href="https://twitter.com/arobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              {/* <a
                href="https://linkedin.com/company/a-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a> */}
              {/* <a
                href="https://tiktok.com/@arobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <Video className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
