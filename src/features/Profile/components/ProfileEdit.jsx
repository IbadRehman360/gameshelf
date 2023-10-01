export default function ProfileEdit({ content }) {
  return (
    <div className="flex h-32 w-full gap-4 text-sm font-normal leading-8 text-gray-500">
      <textarea className="w-full rounded-lg border-2 border-gray-400 p-2 focus:outline-red-500">
        {content}
      </textarea>
    </div>
  );
}
