import React from "react";
import ProductLabeledImage from "../../atoms/ProductLabledImage/ProductLabledImage";
import TimingMetric from "../../atoms/TimingMetric/TimingMetric";

interface ProductCardProps {
  product: {
    image: string;
    title: string;
    price: string;
    days: string;
    hours: string;
    minutes: string;
    label?: string;
  };
}
type TimingMetricKey = "days" | "hours" | "minutes";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex items-start justify-between">
      <ProductLabeledImage image={product.image} label={product?.label} />

      <div className="flex-1 ml-4">
        <h2 className="text-lg font-Nunito font-normal">{product.title}</h2>
        <p className="text-base text-gray-500">
          starting price
          <span className="text-black font-bold text-xl ml-3">
            {product.price}
          </span>
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-gray-500 text-sm">Lot starts in</span>
          {(["days", "hours", "minutes"] as TimingMetricKey[]).map((metric) => (
            <TimingMetric
              key={metric}
              count={product[metric]}
              metric={metric}
            />
          ))}
        </div>
      </div>

      <button className="text-red-500">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
