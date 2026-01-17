import { Button } from "@/components/ui/button";
import DesignCard from "@/components/ui/DesignCard";
import FeatureSectionOne from "@/components/ui/FeatureSectionOne";
import FeatureSectionThree from "@/components/ui/FeatureSectionThree";
import FeatureSectionTwo from "@/components/ui/FeatureSectionTwo";
import Footer from "@/components/ui/Footer";
import FooterBanner from "@/components/ui/FooterBanner";
import HeroSection from "@/components/ui/HeroSection";
import Integrations from "@/components/ui/Integrations";
import NavBar from "@/components/ui/NavBar";
import Workflow from "@/components/ui/Workflow";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
async function Homepage() {
  const { isAuthenticated } = await auth();
  if (isAuthenticated) {
    redirect("/workspace");
  }

  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeatureSectionOne />
      <Workflow />
      <Integrations />
      <FeatureSectionTwo />
      <FeatureSectionThree />
      <DesignCard />
      <Footer />
      <FooterBanner />
    </div>
  );
}

export default Homepage;
