import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { updateLanguage } from "../../../services/apiProfile";
import ProfileEditLanguage from "./ProfileEditLanguage";
import createMutationConfig from "../useUpdateProfile";

function ProfileLanguage({ profileData }) {
  const [isEditLanguage, setIsEditLanguage] = useState(false);
  const [newLanguage, setNewLanguage] = useState({
    first: profileData.data.language.first,
    second: profileData.data.language.second,
    third: profileData.data.language.third,
  });

  const updateLanguageMutation = useMutation(
    (languages) => {
      return updateLanguage(profileData.data.id, languages);
    },
    { ...createMutationConfig(setIsEditLanguage) }
  );

  const handleSaveLanguage = () => {
    updateLanguageMutation.mutate(newLanguage);
  };

  return (
    <div className="rounded-lg border-b-2 pb-4 md:bg-gray-50 md:p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Languages</h3>
        <div className="flex items-center">
          {isEditLanguage && (
            <button
              onClick={handleSaveLanguage}
              className="mr-2 mt-[3px] rounded-full px-1 py-2  text-sm font-semibold tracking-wider transition duration-300 ease-in-out"
            >
              Save
            </button>
          )}
          <button
            onClick={() => setIsEditLanguage(!isEditLanguage)}
            className={`mt-[4.1px] text-sm   font-semibold text-gray-500 ${
              isEditLanguage ? "underline" : "hover:underline"
            }`}
          >
            {isEditLanguage ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
      {isEditLanguage ? (
        <ProfileEditLanguage
          newLanguage={newLanguage}
          setNewLanguage={setNewLanguage}
        />
      ) : (
        <div className="flex flex-wrap gap-4 py-6">
          {profileData.data.language ? (
            <div className="w-fit rounded-lg border-[1px] border-gray-400 bg-white p-5">
              {profileData.data.language}
            </div>
          ) : (
            <></>
          )}
          {profileData.data.first_language ? (
            <div className="w-fit rounded-lg border-[1px] border-gray-400 bg-white p-5">
              {profileData.data.first_language}
            </div>
          ) : (
            <></>
          )}
          {profileData.data.second_language ? (
            <div className="w-fit rounded-lg border-[1px] border-gray-400 bg-white p-5">
              {profileData.data.second_language}
            </div>
          ) : (
            <></>
          )}
          {profileData.data.third_language ? (
            <div className="w-fit rounded-lg border-[1px] border-gray-400 bg-white p-5">
              {profileData.data.third_language}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileLanguage;
