import OfferGamesService from "./OfferGamesService";
import OfferInfo from "./OfferInfo";
import Step from "./Step";
import OfferInfoImage from "./OfferInfoImage";
import RegistrationSuccess from "./OfferCompletion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
// import useUpdateHook from "./hooks/useUpdateHook";
import { useForm } from "react-hook-form";

function useMultiStepForm({ user }) {
  const [step, setStep] = useState(1);

  const { register, handleSubmit, getValues, watch, setValue } = useForm({
    defaultValues: {
      options: [
        { key: "service", value: "defaultValue" },
        { key: "game", value: "defaultValue" },
      ],
    },
  });

  const onSubmit = () => {
    if (step === 3) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const stepComponents = {
    1: <OfferGamesService register={register}>Step One</OfferGamesService>,
    2: (
      <OfferInfo register={register} getValues={getValues} setValue={setValue}>
        Step Two
      </OfferInfo>
    ),
    3: <OfferInfoImage register={register}>Step Three</OfferInfoImage>,
    4: <RegistrationSuccess>Step Four</RegistrationSuccess>,
  };

  return (
    <>
      <div
        className="border border-gray-300"
        style={{ backgroundImage: "url('./')" }}
      >
        <Step step={step} />
        <div className="py-10 sm:px-8 px-5 grid gap-4">
          {stepComponents[step]}
          <div className="flex justify-between mt-2">
            <button
              className={`bg-gray-100 border border-gray-300 sm:px-5 px-4 py-2 rounded cursor-pointer ${
                step === 1 ? "hidden" : "flex"
              }`}
              onClick={() => setStep(step - 1)}
              disabled={step <= 1}
            >
              Back
            </button>
            <button
              className={`bg-gray-700 text-white cursor-pointer sm:px-5 px-4 py-2 rounded flex-end ${
                step === 4 ? "hidden" : "flex"
              }`}
              disabled={step >= 4}
              onClick={onSubmit}
              type="button"
            >
              {step === 3 ? "Finished" : "Next"}
            </button>
            {/* <pre> {JSON.stringify(watch(), null, 2)} </pre> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end text-black py-3 rounded-lg shadow-md">
        <p className="sm:text-sm text-[0.85rem] font-semibold mr-8">
          You can learn more
          <HiOutlineArrowNarrowRight className="inline-block align-middle m-2" />
          <a className="text-blue-500 hover:underline">about us</a>
        </p>
      </div>
    </>
  );
}

export default useMultiStepForm;
