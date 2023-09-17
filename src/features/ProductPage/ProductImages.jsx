export default function ProductImages({ index, imageUrl }) {
  return (
    <div className="h-[40vh] w-full border-2 border-red-100 sm:h-[40vh] md:h-[46vh] lg:h-[20vh]">
      <img
        className="h-full w-full object-cover"
        src={`/CSGOACCOUNT${imageUrl}`}
        alt={`bg ${index}`}
      />
    </div>
  );
}
