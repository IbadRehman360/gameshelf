import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import useUpdateProfileImage from "../useUpdateProfileImage";

function ProfileAvatar({ user }) {
  const [showEditImage, setShowEditImage] = useState(false);
  const userId = user.id;
  const params = "avatars";
  const image_col = "avatar_image";
  const { mutate } = useUpdateProfileImage(userId, params, image_col);
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    mutate(file);
  };

  return (
    <div className="mt-16 text-center md:mt-0 lg:order-1">
      <div className="mb-4 flex w-full justify-center px-4 lg:order-2">
        <div className="relative">
          <div>
            {showEditImage && (
              <label
                htmlFor="imageInput"
                className="absolute bottom-1 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] cursor-pointer md:top-1/4"
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
          <div className={`relative rounded-full`}>
            <img
              alt="..."
              src={user.avatar_image}
              className={`mx-0 -mt-28 h-auto max-w-[7rem] rounded-full border-none align-middle shadow-xl md:-mt-12 lg:-ml-0`}
              onMouseEnter={() => setShowEditImage(true)}
              onMouseLeave={() => setShowEditImage(false)}
            />
            <div
              className={`${
                showEditImage ? "z-30 block bg-black opacity-30" : "hidden"
              } absolute mx-0 -mt-28 h-full w-full max-w-[7rem] rounded-full border-none align-middle md:top-1/2 md:-mt-12 md:translate-y-[-7%] lg:-ml-0`}
              onMouseEnter={() => setShowEditImage(true)}
              onMouseLeave={() => setShowEditImage(false)}
            ></div>
          </div>
        </div>
      </div>
      <h3 className="text-[1.15rem] font-medium sm:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.35rem]">
        {user.first_name} {user.last_name}
      </h3>
      <p className="mt-0.5 text-[0.8rem] uppercase">Level {user.level}</p>
    </div>
  );
}

export default ProfileAvatar;
