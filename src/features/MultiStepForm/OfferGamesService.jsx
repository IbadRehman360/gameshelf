import { FaExclamationCircle } from "react-icons/fa";

function GameSelectionComponent({
  register,
  categories,
  games,
  validationErrors,
}) {
  return (
    <div className="step">
      <div className="my-4 3xl:my-8">
        <label
          className="mb-2 block font-bold tracking-wide text-gray-700"
          htmlFor="service"
        >
          Select Service
        </label>
        <select
          id="service"
          name="serviceId"
          className="w-full rounded border border-gray-400 px-3 py-2"
          {...register("serviceId")}
        >
          <option value={""}>Select an option</option>
          {categories.map((option) => (
            <option key={option.value} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        {validationErrors.serviceId && (
          <div className=" text-sm border w-full  sm:w-80 mt-3 border-red-500  tracking-wide text-red-700 px-5 py-1.5 rounded-md ">
            <div className="flex items-center">
              <FaExclamationCircle className="mr-2 mt-0.5" />
              {validationErrors.serviceId}
            </div>
          </div>
        )}
        <label
          className="mb-2 mt-4 block font-bold tracking-wide text-gray-700"
          htmlFor="game"
        >
          Select Game
        </label>
        <div className="overflow-hidden">
          <select
            id="game"
            name="gameId"
            className="w-full overflow-hidden rounded border border-gray-400 px-3 py-2"
            {...register("gameId")}
          >
            <option value={""}>Select an option</option>
            {games.map((game, index) => (
              <option key={index} value={game.id}>
                {game.title}
              </option>
            ))}
          </select>
          {validationErrors.gameId && (
            <div className=" text-sm border w-full  sm:w-80 mt-3 border-red-500  tracking-wide text-red-700 px-5 py-1.5 rounded-md ">
              <div className="flex items-center">
                <FaExclamationCircle className="mr-2 mt-0.5" />
                {validationErrors.gameId}
              </div>
            </div>
          )}
        </div>
        <div className="mb-3 px-1">
          <p className="mb-3 mt-8 font-semibold text-gray-900">Notifications</p>
          <div className="mt-2 flex items-start text-sm text-gray-600">
            <label htmlFor="comments" className="inline-flex items-start">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className={`mt-0.5 h-5 w-5 accent-gray-600 md:mt-0`}
              />
              <span className="ml-2 text-[0.8rem] font-medium text-slate-500 sm:text-[0.9rem] md:text-[0.92rem]">
                I agree to receive notifications about important changes and
                optional updates.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameSelectionComponent;
