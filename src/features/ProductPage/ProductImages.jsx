import { Link } from "react-router-dom";

export default function ProductImages({ index, imageUrl }) {
  return (
    <>
      <Link
        to={`${imageUrl}`}
        className="text-md flex cursor-pointer items-center justify-center pb-1 font-bold text-gray-500 hover:underline lg:text-lg"
      >
        CLICK THE IMAGE TO VIEW
      </Link>

      <Link to={`${imageUrl}`}>
        <div className="flex h-[40vh] w-full items-center justify-center   sm:h-[40vh] md:h-[46vh] lg:h-[20vh]">
          <img
            className="h-5/6 w-full object-cover object-center lg:h-full border-[4px] border-gray-700"
            src={`${imageUrl}`}
            alt={`bg ${index}`}
          />
        </div>
      </Link>
    </>
  );
}
