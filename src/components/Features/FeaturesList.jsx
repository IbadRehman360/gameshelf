import { FaFeather, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import FeaturesItem from "./FeaturesItem";

const FEATURES = [
  {
    icon: <FaFeather className='text-5xl mb-4' />,
    heading: "East to Use",
    description:
      "A simple and useful interface that helps you to get things done",
  },
  {
    icon: <FaShieldAlt className='text-5xl mb-4' />,
    heading: "Totally Secure",
    description:
      "All payment methods and technologies consider the data security",
  },
  {
    icon: <FaHandshake className='text-5xl mb-4' />,
    heading: "Customer Happiness",
    description: "We are always here to help you after or before your purchase",
  },
  {
    icon: <AiFillThunderbolt className='text-5xl mb-4' />,
    heading: "Lorem, ipsum dolor.",
    description: "Accounts that you buy will be delivered as soon as possible.",
  },
];

export default function FeaturesList() {
  return (
    <section className='py-12 grid grid-cols-[repeat(2,_40%)] justify-center sm:grid-cols-[repeat(4,_22%)] lg:grid-cols-[repeat(4,_18%)]'>
      {FEATURES.map((feature, index) => (
        <FeaturesItem key={index} Details={feature} />
      ))}
    </section>
  );
}
