import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import Stats from "../components/Stats";
import PaymentOptions from "../components/PaymentOptions";
import FeaturesList from "../components/Features/FeaturesList";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className=''>
      <Hero />
      <Stats />
      <CategoryList />
      <PaymentOptions />
      <FeaturesList />
      <Footer />
    </div>
  );
}
