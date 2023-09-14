import { useReducer } from "react";
import OfferGamesService from "./OfferGamesService";
import OfferInfo from "./OfferInfo";
import Step from "./Step";
import OfferInfoImage from "./OfferInfoImage";
import RegistrationSuccess from "./OfferCompletion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const initialValues = {
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "next":
      return { ...state, step: Math.min(state.step + 1, 4) };
    case "back":
      return { ...state, step: Math.max(state.step - 1, 1) };
    default:
      console.log("Invalid action type: " + action.type);
      return state;
  }
}

function useMultiStepForm() {
  const [{ step }, dispatch] = useReducer(reducer, initialValues);

  function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: "next" });
  }

  const stepComponents = {
    1: <OfferGamesService className="step">Step One</OfferGamesService>,
    2: <OfferInfo className="step">Step Two</OfferInfo>,
    3: <OfferInfoImage className="step">Step Three</OfferInfoImage>,
    4: <RegistrationSuccess classNames="step">Step Four</RegistrationSuccess>,
  };

  return (
    <>
      <div
        className="border border-gray-300 "
        style={{ backgroundImage: "./" }}
      >
        <Step step={step} />
        <form onSubmit={onSubmit} className="py-10 sm:px-8 px-5 grid gap-4">
          {stepComponents[step]}
          <div className="flex justify-between mt-2">
            <button
              className={`bg-gray-100 border border-gray-300 sm:px-5 px-4 py-2 rounded cursor-pointer ${
                step === 4 ? "hidden" : "flex"
              }`}
              onClick={() => dispatch({ type: "back" })}
              disabled={step <= 1}
            >
              Back
            </button>

            <button
              className={`bg-gray-700 text-white  cursor-pointer sm:px-5 px-4 py-2 rounded  flex-end  ${
                step === 4 ? "hidden" : "flex"
              }`}
              disabled={step > 3}
            >
              {step === 3 ? "Finished" : "Next"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end  text-black py-3 rounded-lg shadow-md">
        <p className="text-sm font-semibold mr-8">
          You can learn more
          <HiOutlineArrowNarrowRight className="inline-block align-middle m-2" />
          <a className="text-blue-500 hover:underline">about us</a>
        </p>
      </div>
    </>
  );
}

export default useMultiStepForm;
