import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { useRef } from "react";
import useUpdateProfileImage from "../useUpdateProfileImage";

// import useUpdateProfileImage from "../useUpdateProfileImage";

export default function ProfileHeaderBg({ profileData }) {
  const [showImageEditBtn, setShowImageEditBtn] = useState(false);
  const fileInputRef = useRef(null);
  const userId = profileData.data.id;
  const params = "banners";
  const image_col = "banner_image";
  const { mutate } = useUpdateProfileImage(userId, params, image_col);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    mutate(file);
  };
  console.log(profileData.data.banner_image);
  return (
    <section className="relative">
      <div>
        {showImageEditBtn && (
          <div className="absolute left-1/2 top-20 z-50 translate-x-[-50%] translate-y-[-50%] md:top-24">
            <label
              htmlFor="imageInput"
              className="inline-block cursor-pointer"
              onMouseEnter={() => setShowImageEditBtn(true)}
              onMouseLeave={() => setShowImageEditBtn(false)}
            >
              <button
                className="flex flex-col gap-2 rounded-xl bg-gray-300 p-2 md:p-2 xl:p-3"
                onClick={handleImageClick}
              >
                <BsCardImage className="w-full" color="white" size="1.3rem" />
                <span className="text-[0.6rem] font-medium tracking-tight text-white sm:text-[0.7rem] xl:text-[0.8rem]">
                  Edit Image
                </span>
              </button>
              <input
                type="file"
                id="imageInput"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </label>
          </div>
        )}
      </div>
      <div
        className={`w-full ${
          showImageEditBtn ? "opacity-70" : ""
        } h-[260px] bg-cover bg-center bg-no-repeat object-cover hover:opacity-70 sm:bg-cover`}
        style={{
          backgroundImage: `url("${profileData.data.banner_image}")`,
        }}
        onClick={handleImageClick}
        onMouseEnter={() => setShowImageEditBtn(true)}
        onMouseLeave={() => setShowImageEditBtn(false)}
      >
        <span
          id="blackOverlay"
          className="absolute h-full w-full bg-black opacity-5"
        ></span>
      </div>
    </section>
  );
}
