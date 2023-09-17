import { FaFeather, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import FeaturesItem from "./FeaturesItem";

const FEATURES = [
  {
    icon: <FaFeather className="text-3xl sm:mb-0 sm:text-[2.6rem]" />,
    heading: "Easy to Use",
    description:
      "Streamlined, helpful interface aiding efficient task Complete",
  },
  {
    icon: <FaShieldAlt className="text-3xl sm:mb-0 sm:text-[2.6rem]" />,
    heading: "Totally Secure",
    description: "All payment methods and tech prioritize are data security",
  },
  {},
  {
    icon: <FaHandshake className="text-3xl sm:mb-0 sm:text-[2.6rem]" />,
    heading: "Customer Happiness",
    description: "Assistance available both pre- and post-purchase for you",
  },
  {
    icon: <AiFillThunderbolt className="text-3xl sm:mb-0 sm:text-[2.6rem]" />,
    heading: "Fastest Delivery",
    description: "Purchased accounts promptly delivered with efficiency",
  },
];
export default function FeaturesList() {
  return (
    <section className="relative my-1 grid grid-cols-[repeat(2,_40%)] justify-around bg-[#fdfdfd] sm:justify-center sm:py-2 md:grid-cols-[repeat(4,_24%)] lg:my-2 xl:my-4 2xl:mx-auto 2xl:max-w-[90%]">
      {FEATURES.map((feature, index) => {
        return index != 2 ? (
          <FeaturesItem key={index} Details={feature} />
        ) : (
          <div className="bg-[#fdfdfd]left-[50%] absolute h-full w-[1px] md:hidden" />
        );
      })}
    </section>
  );
}
