import { useState } from "react";
import { useForm } from "react-hook-form";
import createItem from "./hooks/createItem";
import OfferGamesService from "./OfferGamesService";
import OfferInfo from "./OfferInfo";
import OfferInfoImage from "./OfferInfoImage";
import RegistrationSuccess from "./OfferCompletion";
import Step from "./Step";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function MultiStepForm({ user }) {
  const [step, setStep] = useState(1);
  const { register, getValues, setValue, watch } = useForm({});

  watch();

  const stepComponents = {
    1: <OfferGamesService register={register} />,
    2: (
      <OfferInfo
        register={register}
        getValues={getValues}
        setValue={setValue}
      />
    ),
    3: <OfferInfoImage register={register} />,
    4: <RegistrationSuccess />,
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const onSubmitStep = async () => {
    if (step === 3) {
      setStep(step + 1);
      const values = getValues();
      const [updatedData, error] = await createItem(values, user);
    } else {
      setStep(step + 1);
    }
  };
  return (
    <>
      <div className="border border-gray-300">
        <Step step={step} />
        <form>
          <div className="grid gap-4 px-5 py-10 sm:px-8">
            {stepComponents[step]}
            <div className="mt-2 flex justify-between">
              <button
                className={`cursor-pointer rounded border border-gray-300 bg-gray-100 px-4 py-2 sm:px-5 ${
                  step === 1 || step === 4 ? "hidden" : "flex"
                }`}
                onClick={handleBack}
                disabled={step === 1}
              >
                Back
              </button>
              <button
                className={`cursor-pointer rounded bg-gray-700 px-4 py-2 text-white sm:px-5 ${
                  step === 4 ? "hidden" : "flex"
                }`}
                onClick={onSubmitStep}
                disabled={step === 4}
                type={step === 3 ? "submit" : "button"}
              >
                {step === 3 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
          {/* <pre> {JSON.stringify(watch(), null, 2)} </pre> */}
        </form>
      </div>
      <div className="flex items-center justify-end rounded-lg py-3 text-black shadow-md">
        <p className="mr-8 text-[0.85rem] font-semibold sm:text-sm">
          You can learn more
          <HiOutlineArrowNarrowRight className="m-2 inline-block align-middle" />
          <a className="text-blue-500 hover:underline">about us</a>
        </p>
      </div>
    </>
  );
}

export default MultiStepForm;
