export default function ProfileEditLanguage({
  newLanguageProp,
  setNewLanguage,
}) {
  return (
    <div className="flex flex-col gap-2 py-2">
      <p className="grid gap-4 font-normal leading-relaxed text-gray-500">
        First Language:
      </p>
      <select
        className="w-full max-w-xs rounded-md border border-gray-400 bg-white px-3 py-[0.4rem] text-[0.8rem] font-semibold text-gray-900 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        value={newLanguageProp}
        onChange={(e) => setNewLanguage(e.target.value)}
      >
        <option value="Spanish">Spanish</option>
        <option value="German">German</option>
        <option value="French">French</option>
      </select>

      <p className="grid gap-4 font-normal leading-relaxed text-gray-500">
        Second Language:
      </p>
      <select
        className="w-full max-w-xs rounded-md border border-gray-400 bg-white px-3 py-[0.4rem] text-[0.8rem] font-semibold text-gray-900 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        value={newLanguageProp}
        onChange={(e) => setNewLanguage(e.target.value)}
      >
        <option value="Italian">Italian</option>
        <option value="Arabic">Arabic</option>
        <option value="Chinese">Chinese</option>
      </select>

      <div>
        <p className="grid gap-4 font-normal leading-relaxed text-gray-500">
          Third Language:
        </p>
        <select
          className="w-full max-w-xs rounded-md border border-gray-400 bg-white px-3 py-[0.4rem] text-[0.8rem] font-semibold text-gray-900 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          value={newLanguageProp}
          onChange={(e) => setNewLanguage(e.target.value)}
        >
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Russian">Urdu</option>
        </select>
      </div>
    </div>
  );
}
