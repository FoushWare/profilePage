interface ProductLabeledImageProps {
  label?: string;
  image?: string;
}

const ProductLabeledImage: React.FC<ProductLabeledImageProps> = ({
  label,
  image,
}) => {
  return (
    <div className="relative">
      <img src={image} className="w-full object-cover" />
      {label && (
        <div className="absolute bottom-0 right-0">
          <img src={`/images/products/labels/${label}.svg`} alt={label} />
        </div>
      )}
    </div>
  );
};

export default ProductLabeledImage;
