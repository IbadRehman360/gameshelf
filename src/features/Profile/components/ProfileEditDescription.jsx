export default function ProfileEditDescription({
  newDescription,
  maxCharacters,
  setNewDescription,
}) {
  const maxWordLength = 20;

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const words = inputValue.split(" ");

    const truncatedWords = words.map((word) =>
      word.length > maxWordLength ? word.slice(0, maxWordLength) : word
    );

    const truncatedValue = truncatedWords.join(" ");

    if (truncatedValue.length <= maxCharacters) {
      setNewDescription(truncatedValue);
    }
  };

  return (
    <div className="flex h-30 w-full gap-4  text-sm font-normal leading-8 text-gray-500">
      <div className="relative w-full">
        <textarea
          className="w-full rounded-lg h-[130px] md:h-32   border-2 border-gray-400 p-2 focus:outline-red-500"
          value={newDescription}
          style={{ resize: "none" }}
          onChange={handleChange}
        />
        <p className="absolute top-2 right-2  text-gray-500">
          {newDescription.length}/{maxCharacters}
        </p>
      </div>
    </div>
  );
}
