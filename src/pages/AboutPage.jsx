import CallToAction from "../components/Features/About/CallToAction";
import Features from "../components/Features/About/Features";
import HeroSection from "../components/Features/About/HeroSection";
import Stats from "../components/Features/About/Stats";
import Testimonials from "../components/Features/About/Testimonials";
export default function DashboardPage() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 pb-20 border-b  border-slate-500  md:px-12 xl:px-6">
        <HeroSection />
        <Features />
        <Stats />
        <Testimonials />
        <CallToAction />
      </div>
    </div>
  );
}
