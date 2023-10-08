import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { faGamepad, faCogs } from "@fortawesome/free-solid-svg-icons";
import RenderInfo from "./OfferRenderInfo";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";

function GameServiceComponent({
  register,
  setValue,
  getValues,
  validationErrors,
}) {
  const predefinedKeys = [
    "Rank",
    "Level",
    "Items",
    "Battle-Passes",
    "Currency",
  ];
  const handleInput = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length > 10) {
      toast.error("Value cannot exceed 10 characters.");
    }
    setValue("value", inputValue);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const key = getValues("key");
    const value = getValues("value");
    let currentOptions = getValues("options") || [];

    const existingIndex = currentOptions.findIndex(
      (options) => options[key] !== undefined
    );

    if (value.length > 10) {
      toast.error("Value cannot exceed 10 characters.");
      return;
    }

    if (existingIndex !== -1) {
      currentOptions[existingIndex][key] = value;
    } else if (currentOptions.length < 2 && key && value) {
      const newOption = {};
      newOption[key] = value;
      currentOptions.push(newOption);
    }

    setValue("");
    setValue("options", currentOptions);
  };
  const handleRemoveClick = (index) => {
    let currentOptions = getValues("options") || [];

    if (index >= 0 && index < currentOptions.length) {
      currentOptions.splice(index, 1);
      setValue("options", currentOptions);
    }
  };

  return (
    <div className="step">
      <div className="mb-4">
        <label
          className="mb-4 block font-semibold tracking-wide text-gray-700"
          htmlFor="title"
        >
          Title of the Offer
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          {...register("title")}
          maxLength="50"
          className="w-full rounded border px-3 py-2"
        />
      </div>
      {validationErrors.title && (
        <div className=" text-sm border w-96 mb-5 border-red-500  tracking-wide text-red-700 px-5 py-1.5 rounded-md mt-2">
          <div className="flex items-center">
            <FaExclamationCircle className="mr-2 mt-0.5" />
            {validationErrors.title}
          </div>
        </div>
      )}
      <label
        className="mr-2 font-semibold tracking-wide text-gray-700"
        htmlFor="price"
      >
        Product Price
      </label>
      <div className="mb-6 mt-4 items-center sm:flex">
        <input
          type="number"
          id="price"
          name="price"
          required
          maxLength="3"
          {...register("price")}
          className="w-full rounded border px-3 py-2"
        />
        <div className="my-5 sm:hidden"></div>

        <label
          className="mb-2 mr-6 font-bold tracking-wider text-gray-700 sm:ml-10 sm:block"
          htmlFor="quantity"
        >
          Quantity:
        </label>
        <div className="my-5 sm:hidden"> </div>

        <select
          className="rounded-lg border border-gray-400 bg-white px-6 py-1.5 outline-none hover:bg-gray-100 focus:ring sm:py-2"
          id="quantity"
          required
          {...register("stock")}
        >
          {[...Array(10)?.keys()].map((num) => (
            <option
              key={num}
              value={num + 1}
              className="bg-gray-50 font-medium text-blue-900 hover:bg-gray-200"
            >
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      {validationErrors.price && (
        <div className=" text-sm border w-96 mb-5 border-red-500  tracking-wide text-red-700 px-5 py-1.5 rounded-md mt-2">
          <div className="flex items-center">
            <FaExclamationCircle className="mr-2 mt-0.5" />
            {validationErrors.price}
          </div>
        </div>
      )}

      <div className="grid gap-4">
        <div className="mt-3 mb-2 flex flex-wrap gap-4 text-sm sm:text-base">
          {RenderInfo(
            "Service ID",
            getValues("serviceId"),
            faCogs,
            "text-blue-500"
          )}
          {RenderInfo(
            "Game ID",
            getValues("gameId"),
            faGamepad,
            "text-green-500"
          )}
          {getValues("options")?.map((option, index) => (
            <div
              key={index}
              className="my-1 flex w-auto items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-700 shadow-md sm:mb-0"
            >
              <button
                onClick={() => handleRemoveClick(index)}
                className="font-bold mr-2 text-red-500 focus:outline-none"
              >
                <FaTrash />
              </button>
              <div>
                {Object.entries(option).map(([key, value]) => (
                  <p key={key} className="mr-2 font-semibold text-gray-700">
                    {key}
                    <span className="ml-1 tracking-wider text-gray-600">
                      : {value}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h4 className="text-[1.06rem] font-bold mt-4 text-gray-600">
          <span className="border-gray-400 tracking-wide">Optional Titles</span>
        </h4>
        <div className="mb-6 mt-2 grid gap-6 sm:flex sm:gap-2">
          <select
            {...register("key")}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 sm:w-auto"
          >
            <option value="">Select a key</option>
            {predefinedKeys.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <input
            {...register("value")}
            type="text"
            onInput={handleInput}
            placeholder="Enter Value"
            maxLength="10"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:ml-2 sm:w-auto"
          />

          <button
            onClick={handleAddClick}
            className="w-full rounded-lg bg-slate-600 p-2.5 px-6 text-sm font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:ml-2 sm:w-auto"
          >
            Add
          </button>
        </div>
        <div className="text-red-500" id="error-message"></div>{" "}
        {/* Add error message element */}
      </div>
    </div>
  );
}

export default GameServiceComponent;
