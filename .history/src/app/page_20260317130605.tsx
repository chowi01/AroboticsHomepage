import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CardsSection } from "@/components/sections/cards-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { VideoGallerySection } from "@/components/sections/video-gallery-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <SolutionsSection />
        {/* <ProductsSection /> */}
        {/* <CardsSection /> */}
        {/* <SpecialProductSection /> */}
        <VideoGallerySection />

        {/* <CertificationsSection /> */}
      </main>
      <Footer />
    </>
  );
}
