import { Link } from "react-router-dom";
export default function ProductImages({ index, imageUrl }) {
  return (
    <div className="relative">
      <Link to={`${imageUrl}`}>
        <div className="relative flex h-[40vh] w-full items-center justify-center sm:h-[40vh] md:h-[46vh] lg:h-[20vh]">
          <img
            className="h-5/6 w-full border-[4px] border-gray-700 object-cover object-center lg:h-full"
            src={`${imageUrl}`}
            alt={`bg ${index}`}
          />
        </div>
      </Link>

      <div className="absolute bottom-0 inset-x-0 bg-white bg-opacity-80 py-2 text-center">
        <Link
          to={`${imageUrl}`}
          className="text-md font-bold text-gray-500 hover:underline"
        >
          CLICK THE IMAGE TO VIEW
        </Link>
      </div>
    </div>
  );
}
