import { useReducer } from "react";
import OfferGamesService from "./OfferGamesService";
import OfferInfo from "./OfferInfo";
import Step from "./Step";
import OfferInfoImage from "./OfferInfoImage";
const initialValues = {
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "next":
      return { ...state, step: Math.min(state.step + 1, 3) };
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
  };

  return (
    <div className="border">
      <Step />
      <form onSubmit={onSubmit} className="py-10 px-8 grid gap-4">
        {stepComponents[step]}
        <div className="flex justify-between">
          <button
            className={`bg-gray-300 px-4 py-2 rounded `}
            onClick={() => dispatch({ type: "back" })}
            disabled={step <= 1}
          >
            Back
          </button>

          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded`}
            disabled={step > 3}
          >
            {step === 3 ? "finished" : "next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default useMultiStepForm;
