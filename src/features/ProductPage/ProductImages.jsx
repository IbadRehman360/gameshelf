export default function ProductImages({ index, imageUrl }) {
  return (
    <div className="h-[40vh] w-full sm:h-[40vh] md:h-[46vh]   border-2   border-red-100 lg:h-[20vh]">
      <img
        className=" object-cover w-full h-full"
        src={`/CSGOACCOUNT${imageUrl}`}
        alt={`bg ${index}`}
      />
    </div>
  );
}
