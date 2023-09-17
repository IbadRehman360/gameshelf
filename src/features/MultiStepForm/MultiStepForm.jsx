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
        className="border border-gray-300"
        style={{ backgroundImage: "./" }}
      >
        <Step step={step} />
        <form onSubmit={onSubmit} className="grid gap-4 px-5 py-10 sm:px-8">
          {stepComponents[step]}
          <div className="mt-2 flex justify-between">
            <button
              className={`cursor-pointer rounded border border-gray-300 bg-gray-100 px-4 py-2 sm:px-5 ${step === 4 ? "hidden" : "flex"
                }`}
              onClick={() => dispatch({ type: "back" })}
              disabled={step <= 1}
            >
              Back
            </button>

            <button
              className={`cursor-pointer  rounded bg-gray-700 px-4 py-2 text-white  sm:px-5  ${step === 4 ? "hidden" : "flex"
                }`}
              disabled={step > 3}
            >
              {step === 3 ? "Finished" : "Next"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end rounded-lg py-3 text-black shadow-md">
        <p className="mr-8 text-sm font-semibold">
          You can learn more
          <HiOutlineArrowNarrowRight className="m-2 inline-block align-middle" />
          <a className="text-blue-500 hover:underline">about us</a>
        </p>
      </div>
    </>
  );
}

export default useMultiStepForm;
