export default function ProfileEditLanguage() {
  return (
    <div className="py-2 px- flex flex-col gap-2">
      <p className="text-md font-normal gap-4 text-gray-500 grid leading-relaxed text-blueGray-700">
        First Language:
      </p>
      <select className="w-full max-w-xs px-3 py-[0.4rem] sm:text-[1.2em] text-[0.8rem] font-semibold  text-gray-900 bg-transparent border  bg-white border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
        <option value="english">English</option>
        <option value="german">German</option>
        <option value="french">French</option>
      </select>
      <p className="text-md font-normal gap-4 text-gray-500 grid leading-relaxed text-blueGray-700">
        Second Language:
      </p>
      <select className="w-full max-w-xs px-3 py-[0.4rem] sm:text-[1.2em] text-[0.8rem] font-semibold  text-gray-900 bg-transparent border  bg-white border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
        <option value="english">English</option>
        <option value="german">German</option>
        <option value="french">French</option>
      </select>
      <div>
        <p className="text-md font-normal gap-4 text-gray-500 grid leading-relaxed text-blueGray-700">
          Third Language:
        </p>
        <select className="w-full max-w-xs px-3 py-[0.4rem] sm:text-[1.2em] text-[0.8rem] font-semibold  text-gray-900 bg-transparent border  bg-white border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
          <option value="english">English</option>
          <option value="german">German</option>
          <option value="french">French</option>
        </select>
      </div>
    </div>
  );
}
