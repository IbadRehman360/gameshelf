import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { upsertLanguage } from "../../../services/apiProfile";
import ProfileEditLanguage from "./ProfileEditLanguage";
import createMutationConfig from "../useUpdateProfile";

function ProfileLanguage({ profileData }) {
  const [isEditLanguage, setIsEditLanguage] = useState(false);
  const [newLanguage, setNewLanguage] = useState([]);

  const updateLanguageMutation = useMutation(
    (newLanguage) => {
      return upsertLanguage(profileData.data.id, newLanguage);
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
          content={profileData.data.language}
          onSave={handleSaveLanguage}
          newLanguage={newLanguage}
          setNewLanguage={setNewLanguage}
        />
      ) : (
        <div className="flex flex-wrap gap-4 py-6">
          {profileData.data.languages ? (
            profileData.data.languages.map((language) => (
              <div
                key={language}
                className="w-fit rounded-lg border-[1px] border-gray-400 bg-white p-5"
              >
                {language}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileLanguage;
