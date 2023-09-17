export default function Testimonial({ name, comment, index }) {
  return (
    <div className="aspect-auto rounded-3xl border border-gray-100 bg-gray-100 p-8 shadow-2xl shadow-gray-600/10 dark:shadow-none">
      <div className="flex gap-4">
        <img
          className="h-12 w-12 rounded-full"
          src={`./images/avatars/avatar-${index}.webp`}
          alt={`${name}'s avatar`}
          width="200"
          height="200"
          loading="lazy"
        />
        <div>
          <h6 className="mt-1.5 text-lg font-medium text-gray-800">{name}</h6>
        </div>
      </div>
      <p className="mt-6 text-gray-600">{comment}</p>
    </div>
  );
}
