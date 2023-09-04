export default function ProfileEdit({ content }) {
  return (
    <div className="flex w-full h-32 text-sm  md:text-md font-normal gap-4 text-gray-500 leading-8">
      <textarea className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-red-500 ">
        {content}
      </textarea>
    </div>
  );
}
