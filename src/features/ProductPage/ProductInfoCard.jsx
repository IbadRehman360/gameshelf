import ProductImage from "./ProductImage";
import ProductPriceInfo from "./ProductPriceInfo";
import PurchaseBuyBtn from "./PurchaseBuyBtn";

function ProductInfoCard({ product }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-100 p-6 sm:w-full md:w-1/2 lg:w-2/5">
      <div className="w-full">
        <ProductImage product={product} />
      </div>
      <ProductPriceInfo product={product} />
      <PurchaseBuyBtn product={product} />
    </div>
  );
}

export default ProductInfoCard;
