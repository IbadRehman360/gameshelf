import { useState } from "react";
import ProfileEditDescription from "../Profile/components/ProfileEditDescription";
import ProductEdit from "./ProductEdit";
import { updateDescription } from "../../services/apiProfile";
import { useMutation } from "@tanstack/react-query";
import createMutationConfig from "../Profile/useUpdateProfile";

function ProductDescriptio({ session, product }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(product[0].description);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const isSessionAvailable = !!session;

  const field = "description";
  const from = "items";
  const id = product[0].id;
  const updateDescriptionMutation = useMutation(
    (newDescription) => {
      return updateDescription(id, newDescription, field, from);
    },
    { ...createMutationConfig(setIsEditing) }
  );

  const handleSaveDescription = () => {
    updateDescriptionMutation.mutate(newDescription);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 className="text-[1.1rem]  text-gray-700 font-semibold mr-2 sm:text-lg md:text-xl">
            Description
          </h3>
          {!isEditing && (
            <ProductEdit
              isSessionAvailable={isSessionAvailable}
              session={session}
              product={product}
              handleEdit={handleEdit}
            />
          )}
        </div>
        {isEditing && (
          <div>
            <button
              className="mr-2 mt-[3px] rounded-full px-1 py-2  text-sm font-semibold tracking-wider transition duration-300 ease-in-out"
              onClick={() => handleSaveDescription(newDescription)}
            >
              Save
            </button>
            <button
              className="mr-2 mt-[4.1px] underline  text-sm font-semibold text-gray-500"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      {isEditing ? (
        <div className="">
          <ProfileEditDescription
            newDescription={newDescription}
            setNewDescription={setNewDescription}
            maxCharacters={800}
          />
        </div>
      ) : (
        <div
          className="text-[0.86rem] tracking-wide text-gray-800"
          style={{ whiteSpace: "pre-wrap" }}
        >
          <p>{product[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDescriptio;
