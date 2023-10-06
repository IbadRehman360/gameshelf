import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import ProfileEdit from "./ProfileEditDescription";
import { updateDescription } from "../../../services/apiProfile";
import createMutationConfig from "../useUpdateProfile";

function ProfileDescription({ profileData }) {
  const [newDescription, setNewDescription] = useState(
    profileData.data.description
  );
  const [isEdit, setIsEdit] = useState(false);

  const updateDescriptionMutation = useMutation(
    (newDescription) => {
      return updateDescription(profileData.data.id, newDescription);
    },
    { ...createMutationConfig(setIsEdit) }
  );

  const handleSaveDescription = () => {
    updateDescriptionMutation.mutate(newDescription);
  };
  return (
    <div
      className={` rounded-lg pb-6 border-b-2 md:pb-4 ${
        isEdit && "h-52  md:h-56"
      } md:bg-gray-50 md:p-4`}
    >
      <div className="flex flex-col gap-4 ">
        <h3 className="inline-flex items-center text-gray-800 justify-between text-[1.04rem] sm:text-[1.2rem] font-semibold">
          Description{" "}
          <div className="flex items-center">
            {isEdit && (
              <button
                onClick={() => handleSaveDescription(newDescription)}
                className="mr-2 mt-[3px] rounded-full px-1 py-2  text-sm font-semibold tracking-wider transition duration-300 ease-in-out"
              >
                Save
              </button>
            )}
            <button
              onClick={() => setIsEdit(!isEdit)}
              className={`mt-[4.1px] text-sm   font-semibold text-gray-500 ${
                isEdit ? "underline" : "hover:underline"
              }`}
            >
              {isEdit ? "Cancel" : "Edit"}
            </button>
          </div>
        </h3>
        <div className="flex flex-wrap" style={{ whiteSpace: "pre-line" }}>
          {isEdit ? (
            <ProfileEdit
              content={profileData.data.description}
              onSave={handleSaveDescription}
              newDescription={newDescription}
              setNewDescription={setNewDescription}
            />
          ) : (
            <div
              className="  tracking-wide text-gray-800"
              style={{ whiteSpace: "pre-line" }}
            >
              {profileData.data.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileDescription;
