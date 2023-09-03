function OfferInfoComponent() {
  return (
    <div className="step">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Offer Details
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="productDescription"
        >
          Product Description
        </label>
        <textarea
          required
          id="productDescription"
          name="productDescription"
          className="border rounded w-full py-2 px-3"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="image"
        >
          Image URL
        </label>
        <input
          required
          type="text"
          id="image"
          name="image"
          className="border rounded w-full py-2 px-3"
        />
      </div>
    </div>
  );
}

export default OfferInfoComponent;
