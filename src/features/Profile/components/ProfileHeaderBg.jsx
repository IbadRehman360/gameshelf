import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { useRef } from "react";

export default function ProfileHeaderBg() {
  const [showImageEditBtn, setShowImageEditBtn] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

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
              />
            </label>
          </div>
        )}
      </div>
      <div
        className={`w-full ${
          showImageEditBtn && "opacity-70"
        } h-[240px] bg-cover bg-center bg-no-repeat object-cover hover:opacity-70 sm:bg-cover`}
        style={{ backgroundImage: 'url("/ProfileBanner.png")' }}
        onClick={handleImageClick} // Handle image click
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
