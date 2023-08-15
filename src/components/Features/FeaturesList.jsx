import { FaFeather, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import FeaturesItem from "./FeaturesItem";

const FEATURES = [
  {
    icon: <FaFeather className='text-3xl sm:text-5xl sm:mb-4' />,
    heading: "East to Use",
    description:
      "Streamlined, helpful interface aiding efficient task completion",
  },
  {
    icon: <FaShieldAlt className='text-3xl sm:text-5xl sm:mb-4' />,
    heading: "Totally Secure",
    description: "All payment methods and tech prioritize data security",
  },
  {},
  {
    icon: <FaHandshake className='text-3xl sm:text-5xl sm:mb-4' />,
    heading: "Customer Happiness",
    description: "Assistance available both pre- and post-purchase for you",
  },
  {
    icon: <AiFillThunderbolt className='text-3xl sm:text-5xl sm:mb-4' />,
    heading: "Fastest Delivery",
    description: "Purchased accounts promptly delivered with efficiency",
  },
];

export default function FeaturesList() {
  return (
    <section className='relative py-2 my-1 grid grid-cols-[repeat(2,_40%)] justify-around sm:my-4 lg:my-8 sm:justify-center sm:grid-cols-[repeat(4,_22%)] lg:grid-cols-[repeat(4,_18%)] 2xl:max-w-[80%] 2xl:mx-auto 2xl:my-6 '>
      {FEATURES.map((feature, index) => {
        return index != 2 ? (
          <FeaturesItem key={index} Details={feature} />
        ) : (
          <div className='absolute w-[1px] h-full bg-gray-300 left-[50%] sm:hidden' />
        );
      })}
    </section>
  );
}
