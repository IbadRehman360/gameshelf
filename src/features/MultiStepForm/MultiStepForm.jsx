import OfferGamesService from "./OfferGamesService";
import OfferInfo from "./OfferInfo";
import Step from "./Step";
import OfferInfoImage from "./OfferInfoImage";
import RegistrationSuccess from "./OfferCompletion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import useUpdateHook from "./hooks/useUpdateHook";
import { get, useForm } from "react-hook-form";

function useMultiStepForm({ user }) {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, getValues, watch, setValue } = useForm({
    defaultValues: {
      options: [
        { key: "service", value: "defaultValue", key: "game", value: "defaultValue" },
      ],
    },
  });
  const values = getValues();
  console.log(values.options)
  const onSubmit = async () => {
    if (step === 3) {
      setStep(step + 1);
      const [updatedData, error] = await useUpdateHook(values, user);
      console.log(getValues())


    } else {
      setStep(step + 1);

    }
  };
  watch();
  const stepComponents = {
    1: <OfferGamesService register={register}>Step One</OfferGamesService>,
    2: (
      <OfferInfo register={register} getValues={getValues} setValue={setValue}>
        Step Two
      </OfferInfo>
    ),
    3: <OfferInfoImage setValue={setValue} register={register}>Step Three</OfferInfoImage>,
    4: <RegistrationSuccess>Step Four</RegistrationSuccess>,
  };
  return (
    <>
      <div
        className="border border-gray-300"
        style={{ backgroundImage: "url('./')" }}
      >
        <Step step={step} />
        <div className="grid gap-4 px-5 py-10 sm:px-8">
          {stepComponents[step]}
          <div className="mt-2 flex justify-between">
            <button
              className={`cursor-pointer rounded border border-gray-300 bg-gray-100 px-4 py-2 sm:px-5 ${step === 1 ? "hidden" : "flex"
                }`}
              onClick={() => setStep(step - 1)}
              disabled={step <= 1}
            >
              Back
            </button>
            <button
              className={`cursor-pointer  rounded bg-gray-700 px-4 py-2 text-white  sm:px-5 ${step === 4 ? "hidden" : "flex"
                }`}
              disabled={step >= 4}
              onClick={onSubmit}
              type="button"
            >
              {step === 3 ? "Finished" : "Next"}
            </button>
            <pre> {JSON.stringify(watch(), null, 2)} </pre>
          </div>
        </div>
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
