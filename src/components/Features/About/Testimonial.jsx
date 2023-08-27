export default function Testimonial({ name, comment, index }) {
  return (
    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl   bg-white shadow-2xl shadow-gray-600/10 dark:shadow-none">
      <div className="flex gap-4">
        <img
          className="w-12 h-12 rounded-full"
          src={`./images/avatars/avatar-${index}.webp`}
          alt={`${name}'s avatar`}
          width="200"
          height="200"
          loading="lazy"
        />
        <div>
          <h6 className="text-lg mt-1.5 font-medium text-gray-800">{name}</h6>
        </div>
      </div>
      <p className="mt-6   text-gray-600">{comment}</p>
    </div>
  );
}
