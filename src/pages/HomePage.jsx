
import FeatureSection from "@/components/home/FeatureSection.jsx";
import PlatformSection from "@/components/home/PlatformSection.jsx";
import CapabilitySection from "@/components/home/CapabilitySection.jsx";
import EnterpriseSection from "@/components/home/EnterpriseSection.jsx";
import CommunitySection from "@/components/home/CommunitySection.jsx";
import TestimonialCarouselSection from "@/components/home/TestimonialCarouselSection.jsx";
import BlogsSection from "@/components/home/BlogSection.jsx";
import FooterSection from "@/components/home/FooterSection.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";
import Navbar from "@/components/Navbar.jsx";
import CtaSection from "@/components/home/CtaSection.jsx";

const HomePage = () => {
  return (
    <>

 <Navbar
  wrapperClassName="fixed top-0 left-0"
  disableScrollHide={false}
  linkClassName="text-white"
  iconClassName="text-white"
/>

      <HeroSection />
      <FeatureSection />
      <PlatformSection />
      <CapabilitySection />
      <EnterpriseSection />
      <CommunitySection />
      <TestimonialCarouselSection />
      <CtaSection />
      <BlogsSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
