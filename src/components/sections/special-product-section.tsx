import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, Eye } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI 안전시스템",
    description: "인공지능 기반 실시간 위험 감지"
  },
  {
    icon: Eye,
    title: "고정밀 인식",
    description: "99.9% 정확도의 객체 인식 기술"
  },
  {
    icon: Zap,
    title: "즉시 반응",
    description: "0.1초 이내 긴급 정지 시스템"
  }
];

const benefits = [
  "작업자 안전 보장",
  "사고 위험 99% 감소",
  "24시간 무인 운영",
  "보험료 절감 효과"
];

export function SpecialProductSection() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
              <span>🏆 특허 기술</span>
            </div>

            {/* Main Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                포크형 AMR with{" "}
                <span className="text-gray-400">AI 안전시스템</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                검증된 안전성과 효율성
              </p>
              <p className="text-gray-400 leading-relaxed">
                AI 카메라와 LiDAR 센서를 활용한 다중 안전시스템으로 작업자와 장비의 안전을 보장하면서도 
                최고의 작업 효율성을 실현하는 혁신적인 AMR 솔루션입니다.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg mb-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">주요 장점</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-black text-white px-8 py-3"
                asChild
              >
                <a href="/products/fork-type/ai-safety">
                  자세히 알아보기
                </a>
              </Button>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-2xl">
              {/* Placeholder for product image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/images/special-product-amr.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-400">99.9%</div>
                      <div className="text-xs text-gray-300">안전성</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-400">0.1s</div>
                      <div className="text-xs text-gray-300">반응속도</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-400">24/7</div>
                      <div className="text-xs text-gray-300">무인운영</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center animate-pulse">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-bounce">
              <Eye className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-400 mb-2">8건</div>
              <div className="text-gray-400">보유 특허</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-400 mb-2">18대</div>
              <div className="text-gray-400">납품 실적</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-400 mb-2">100%</div>
              <div className="text-gray-400">고객 만족도</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-400 mb-2">3년</div>
              <div className="text-gray-400">품질 보증</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}