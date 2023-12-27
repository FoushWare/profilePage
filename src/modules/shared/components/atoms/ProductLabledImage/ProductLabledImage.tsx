import { ProductLabeledImageProps } from "./types";

const ProductLabeledImage: React.FC<ProductLabeledImageProps> = ({
  label,
  image,
}) => {
  return (
    <div className="relative">
      <img src={image} className=" w-full" />
      {label && (
        <div className="absolute bottom-0 right-0">
          <img src={`/images/products/labels/${label}.svg`} alt={label} />
        </div>
      )}
    </div>
  );
};

export default ProductLabeledImage;
