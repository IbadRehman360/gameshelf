import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import useDeleteProduct from "./useDeleteProduct";
import { HiXMark } from "react-icons/hi2";

function ProfileProductDeletion({ id, game }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, isLoading } = useDeleteProduct();

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    mutate({ id, game });
    setIsDeleting(true);
    setIsModalOpen(false);
  };

  const closeDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="text-red-500 cursor-pointer bg-gray-100 rounded-full p-2 hover:bg-red-100 focus:outline-none"
        onClick={handleDelete}
      >
        <FaTrash />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-[var(--backdrop-color)] backdrop-blur-[4px] opacity-100 z-10 transition-all duration-500"
            onClick={closeDelete}
          />

          <div
            className="modal-container border border-gray-500 bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="modal-content py-4 text-left px-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Delete Product
              </h2>
              <p className="text-gray-600 text-sm mt-1 md:text-sm mb-4">
                Are you sure you want to delete this product permanently? This
                action cannot be undone.
              </p>
              <div className="text-right space-x-2 mt-4">
                <button
                  className="bg-gray-300 hover-bg-gray-400 text-gray-800 font-semibold py-1.5 px-4 rounded"
                  onClick={closeDelete}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 hover:bg-red-800 text-white font-semibold py-1.5 px-4 rounded"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileProductDeletion;
