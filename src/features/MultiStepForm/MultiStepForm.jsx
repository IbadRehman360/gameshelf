import { useState } from "react";
import { useForm } from "react-hook-form";
import OfferGamesService from "./OfferGamesService";
import OfferInfo from "./OfferInfo";
import OfferInfoImage from "./OfferInfoImage";
import RegistrationSuccess from "./OfferCompletion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { createItem } from "../../services/apiItem";
import Step from "./Step";
import useCategories from "../HomePage/useCategories";
import useGames from "./useGames";
import useUpdateProfileImage from "./userImage";
import MultiStepLoader from "./MultiStepLoader";
import { Link } from "react-router-dom";

function MultiStepForm({ user }) {
  const [step, setStep] = useState(1);
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  watch();
  const { mutate, isLoading } = useUpdateProfileImage();

  const { categories, loadingCategories } = useCategories();
  const { games, gamesLoading } = useGames();
  const [validationErrors, setValidationErrors] = useState({});
  if (loadingCategories || gamesLoading) {
    return <MultiStepLoader />;
  }

  const stepComponents = {
    1: (
      <OfferGamesService
        register={register}
        categories={categories}
        games={games[0]}
        validationErrors={validationErrors}
      />
    ),
    2: (
      <OfferInfo
        register={register}
        getValues={getValues}
        setValue={setValue}
        validationErrors={validationErrors}
      />
    ),
    3: (
      <OfferInfoImage register={register} validationErrors={validationErrors} />
    ),
    4: <RegistrationSuccess />,
  };
  const handleBack = () => {
    console.log("Before Back:", step);
    setStep(step - 1);
    console.log("After Back:", step);
  };
  const userId = user.id;

  const onSubmitStep = async () => {
    try {
      const values = getValues();
      const newValidationErrors = {};

      if (step === 1) {
        if (!values.serviceId) {
          newValidationErrors.serviceId = "Please select a service.";
        }
        if (!values.gameId) {
          newValidationErrors.gameId = "Please select a game.";
        }
      } else if (step === 2) {
        if (!values.title) {
          newValidationErrors.title = "Please provide a title for your item.";
        } else if (values.title.length < 20 || values.title.length > 60) {
          newValidationErrors.title =
            "Title must be between 20 and 50 characters long.";
        }
        if (!values.price) {
          newValidationErrors.price = "Please specify a price for your item.";
        } else if (values.price < 12 || values.price > 500) {
          newValidationErrors.price = "Price should be between $12 and $500.";
        }
      } else if (step === 3) {
        if (!values.description) {
          newValidationErrors.description =
            "Please provide a description between 100 and 500 characters.";
        }
      }

      if (Object.keys(newValidationErrors).length > 0) {
        setValidationErrors(newValidationErrors);
      } else {
        setValidationErrors({});
        setStep((prevStep) => prevStep + 1);
      }

      if (step === 3) {
        if (values.images && values.images.length > 0) {
          mutate({
            file: values.images[0],
            values,
            userId,
            fileName: values.images[0].name,
          });
        } else {
          const { updatedData } = await createItem(values, userId);
        }
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <>
      <div className="border border-gray-300">
        <Step />{" "}
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
                type="button" // Use type="button" to prevent form submission
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
          <Link to={"/about"} className="text-blue-500 hover:underline">
            about us
          </Link>
        </p>
      </div>
    </>
  );
}

export default MultiStepForm;
