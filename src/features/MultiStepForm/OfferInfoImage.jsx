import { PhotoIcon } from "@heroicons/react/24/solid";
import { FaExclamationCircle } from "react-icons/fa";

function OfferInfoComponent({ register, validationErrors }) {
  return (
    <div className="step">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="description"
        >
          Product Description
        </label>
        <textarea
          id="description"
          {...register("description")}
          name="description"
          maxLength={500}
          minLength={100}
          className="w-full rounded border px-3 py-2"
        ></textarea>
      </div>
      {validationErrors.description && (
        <div className=" mb-5 mt-2  w-2/4 rounded-md border  border-red-500 px-5 py-1.5 text-sm tracking-wide text-red-700">
          <div className="flex items-center">
            <FaExclamationCircle className="mr-2.5 mt-0.5" />
            {validationErrors.description}
          </div>
        </div>
      )}
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Product Images (Optional){" "}
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="images"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  {...register("images")}
                  id="images"
                  name="images"
                  type="file"
                  required
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferInfoComponent;
