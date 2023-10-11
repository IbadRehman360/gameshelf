import { FaEdit, FaTrash } from "react-icons/fa";

function ProductEdit({
  isSessionAvailable,
  product,
  session,
  handleEdit,
  handleDelete,
}) {
  return (
    isSessionAvailable &&
    session?.user?.id === product[0]?.seller_id.id && (
      <div className="flex items-center space-x-2">
        <div className="relative inline-block">
          <button
            className="text-blue-500 cursor-pointer bg-gray-100 rounded-full p-2 hover:bg-blue-100 focus:outline-none"
            onClick={handleEdit}
          >
            <FaEdit />
          </button>
        </div>
        <div className="relative inline-block">
          <button
            className="text-red-500 cursor-pointer bg-gray-100 rounded-full p-2 hover:bg-red-100 focus:outline-none"
            onClick={handleDelete}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    )
  );
}

export default ProductEdit;
