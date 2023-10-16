import { FaEdit } from "react-icons/fa";

function ProductEdit({ isSessionAvailable, product, session, handleEdit }) {
  return (
    isSessionAvailable &&
    session?.user?.id === product[0]?.seller_id.id && (
      <div className="flex items-center space-x-2">
        <div className="relative inline-block">
          <button
            className="text-blue-500 cursor-pointer bg-gray-100 rounded-full p-1.5 mb-1 hover:bg-blue-100 focus:outline-none"
            onClick={handleEdit}
          >
            <FaEdit size={15} />
          </button>
        </div>
      </div>
    )
  );
}

export default ProductEdit;
