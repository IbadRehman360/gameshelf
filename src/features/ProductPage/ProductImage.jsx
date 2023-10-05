import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductImage = ({ imageUrl, currentImageIndex, onNextClick }) => {
  if (imageUrl) {
    return (
      <div className="relative">
        <div className="relative flex h-[40vh] w-full items-center justify-center sm:h-[40vh] md:h-[46vh] lg:h-[20vh]">
          <img
            className="h-5/6 w-full border-[4px] border-gray-700 object-cover object-center lg:h-full"
            src={imageUrl}
            alt={`bg ${currentImageIndex}`}
          />
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50/20 p-1 text-white"
            onClick={onNextClick}
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 py-0.5 text-center">
          <Link
            to={`${imageUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-gray-500 hover:underline"
          >
            CLICK THE IMAGE TO VIEW
          </Link>
        </div>
      </div>
    );
  } else {
    // Render a fallback image or your second thing here
    return (
      <div className="flex justify-center">
        <img className="w-36" src="/NOIMAGE2.webp" alt="No Image" />
      </div>
    );
  }
};

export default ProductImage;
