import { FaFeather, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import FeaturesItem from "./FeaturesItem";

const FEATURES = [
  {
    icon: <FaFeather className="text-3xl sm:text-[2.6rem]  sm:mb-0" />,
    heading: "East to Use",
    description:
      "Streamlined, helpful interface aiding efficient task Complete",
  },
  {
    icon: <FaShieldAlt className="text-3xl sm:text-[2.6rem]  sm:mb-0" />,
    heading: "Totally Secure",
    description: "All payment methods and tech prioritize are data security",
  },
  {},
  {
    icon: <FaHandshake className="text-3xl  sm:text-[2.6rem]  sm:mb-0" />,
    heading: "Customer Happiness",
    description: "Assistance available both pre- and post-purchase for you",
  },
  {
    icon: <AiFillThunderbolt className="text-3xl sm:text-[2.6rem] sm:mb-0" />,
    heading: "Fastest Delivery",
    description: "Purchased accounts promptly delivered with efficiency",
  },
];
export default function FeaturesList() {
  return (
    <section className="relative  sm:py-2 xl-2 my-1  grid grid-cols-[repeat(2,_40%)] justify-around  lg:my-2 xl:my-4 sm:justify-center md:grid-cols-[repeat(4,_24%)] 2xl:max-w-[90%] 2xl:mx-auto  ">
      {FEATURES.map((feature, index) => {
        return index != 2 ? (
          <FeaturesItem key={index} Details={feature} />
        ) : (
          <div className="absolute w-[1px] h-full bg-gray-300 left-[50%] md:hidden" />
        );
      })}
    </section>
  );
}
