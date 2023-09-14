import { useReducer } from "react";
import OfferGamesService from "./OfferGamesService";
import OfferInfo from "./OfferInfo";
import Step from "./Step";
import OfferInfoImage from "./OfferInfoImage";
import RegistrationSuccess from "./OfferCompletion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import useUpdateHook from "./hooks/useUpdateHook";
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
function useMultiStepForm({ user }) {
  const [{ step }, dispatch] = useReducer(reducer, initialValues);
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    stock: 0,
    images: "",
    game: "",
    service: "",
    description: "",
    options: { Item: "Account", Game: "CSGO" },
  });
  const updateFormData = (field, value) => {
    console.log(value);
    setFormData({ ...formData, [field]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      const [updatedData] = useUpdateHook(formData, user);
      dispatch({ type: "next" });
    } else {
      dispatch({ type: "next" });
    }
  };
  const handleDeleteOption = (key) => {
    console.log(key);
    const updatedOptions = { ...formData.options };
    delete updatedOptions[key];
    updateFormData("options", updatedOptions);
  };

  const stepComponents = {
    1: (
      <OfferGamesService
        formData={formData}
        updateFormField={updateFormData}
        className="step"
      >
        Step One
      </OfferGamesService>
    ),
    2: (
      <OfferInfo
        formData={formData}
        handleDeleteOption={handleDeleteOption}
        updateFormField={updateFormData}
        setFormData={setFormData}
        className="step"
      >
        Step Two
      </OfferInfo>
    ),
    3: (
      <OfferInfoImage
        formData={formData}
        updateFormField={updateFormData}
        className="step"
      >
        Step Three
      </OfferInfoImage>
    ),
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
        <p className="sm:text-sm text-[0.85rem]  font-semibold mr-8">
          You can learn more
          <HiOutlineArrowNarrowRight className="inline-block align-middle m-2" />
          <a className="text-blue-500 hover:underline">about us</a>
        </p>
      </div>
    </>
  );
}

export default useMultiStepForm;
