import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import useUpdateProfileImage from "../useUpdateProfileImage";
import { useAuth } from "../../../context/AuthProvider";

function ProfileAvatar({ user }) {
  const [showEditImage, setShowEditImage] = useState(false);
  const userId = user.id;
  const params = "avatars";
  const image_col = "avatar_image";
  const { mutate, isLoading } = useUpdateProfileImage(
    userId,
    params,
    image_col
  );
  const { session } = useAuth();
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    mutate(file);
  };
  if (isLoading)
    return (
      <div className="mb-3 flex   w-full justify-center px-4 lg:order-2">
        <img
          alt="..."
          className="mx-0 -mt-12 sm-mt-28 h-auto animate-pulse bg-slate-400 border-2   align-middle shadow-xl md:-mt-12 lg:-ml-0 rounded-full"
          style={{
            width: "115px",
            height: "112px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
          onMouseEnter={() => setShowEditImage(true)}
          onMouseLeave={() => setShowEditImage(false)}
        />
      </div>
    );

  return (
    <div className="mt-16 text-center md:mt-0 lg:order-1">
      <div className="mb-3 flex w-full justify-center px-4 lg:order-2">
        <div className="relative ">
          {session?.user?.id && session?.user?.id === userId && (
            <div>
              {showEditImage && (
                <label
                  htmlFor="imageInput"
                  className="absolute bottom-1 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer md:top-1/4"
                  onMouseEnter={() => setShowEditImage(true)}
                  onMouseLeave={() => setShowEditImage(false)}
                >
                  <AiFillCamera color="white" size="1.5rem" />
                  <span className="text-xs text-white">Edit</span>
                </label>
              )}
              <input
                type="file"
                id="imageInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
          )}
          <div className="relative rounded-full">
            {user.avatar_image ? (
              <img
                alt="..."
                src={user.avatar_image}
                className="mx-0 -mt-28 h-auto rounded-full border border-gray-600 align-middle shadow-xl md:-mt-12 lg:-ml-0"
                style={{
                  width: "112px",
                  height: "112px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                }}
                onMouseEnter={() => setShowEditImage(true)}
                onMouseLeave={() => setShowEditImage(false)}
              />
            ) : (
              <div
                className="mx-0 -mt-28 h-auto text-3xl rounded-full border border-gray-600 align-middle shadow-xl md:-mt-12 lg:-ml-0 flex items-center justify-center bg-gray-300 text-white"
                style={{
                  width: "112px",
                  height: "112px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                }}
                onMouseEnter={() => setShowEditImage(true)}
                onMouseLeave={() => setShowEditImage(false)}
              >
                {user.username[0].toUpperCase()}
              </div>
            )}

            {showEditImage && (
              <div className="z-30 block bg-black opacity-30 absolute inset-0 rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAvatar;
