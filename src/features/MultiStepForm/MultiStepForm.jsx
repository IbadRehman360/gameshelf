import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useUpdateHook from "./hooks/useUpdateHook";
import OfferGamesService from "./OfferGamesService";
import OfferInfo from "./OfferInfo";
import OfferInfoImage from "./OfferInfoImage";
import RegistrationSuccess from "./OfferCompletion";
import Step from "./Step";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function useMultiStepForm({ user }) {
  const [step, setStep] = useState(1);
  const { register, getValues, watch, setValue, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    const [updatedData, error] = await useUpdateHook(data, user);
  };

  watch();

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

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <>
      <div
        className="border border-gray-300"
        style={{ backgroundImage: "url('./')" }}
      >
        <Step step={step} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 px-5 py-10 sm:px-8">
            {stepComponents[step]}
            <div className="mt-2 flex justify-between">
              <button
                className={`cursor-pointer rounded border border-gray-300 bg-gray-100 px-4 py-2 sm:px-5 ${
                  step === 4 ? "hidden" : "flex"
                }`}
                onClick={handleBack}
                disabled={step <= 1}
              >
                Back
              </button>
              <button
                className={`cursor-pointer rounded bg-gray-700 px-4 py-2 text-white sm:px-5 ${
                  step === 4 ? "hidden" : "flex"
                }`}
                disabled={step >= 4}
                onClick={handleNext}
                type={step === 3 ? "submit" : "button"}
              >
                {step === 3 ? "Finished" : "Next"}
              </button>
              <pre> {JSON.stringify(watch(), null, 2)} </pre>
            </div>
          </div>
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

export default useMultiStepForm;
