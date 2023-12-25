import FilterCount from "../../atoms/FilterCount/FilterCount";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import ProductsFilter from "../../molecules/ProductsFilter/ProductsFilter";

const ProductList = () => {
  const products = [
    {
      image: "/images/products/product-1.svg",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      price: "1000 EGP",
      days: "2",
      hours: "10",
      minutes: "50",
      label: "liveAuction",
    },
    {
      image: "/images/products/product-2.svg",
      title: "Product Title",
      price: "2000 EGP",
      days: "2",
      hours: "10",
      minutes: "50",
      label: "forsale",
    },
    {
      image: "/images/products/product-3.svg",
      title: "Product Title",
      price: "3000 EGP",
      days: "2",
      hours: "10",
      minutes: "50",
      label: "liveAuction",
    },
    {
      image: "/images/products/product-4.svg",
      title: "Product Title",
      price: "4000 EGP",
      days: "2",
      hours: "10",
      minutes: "50",
      label: "forsale",
    },
    {
      image: "/images/products/product-5.svg",
      title: "Product Title",
      price: "5000 EGP",
      days: "2",
      hours: "10",
      minutes: "50",
    },
  ];

  return (
    <div className="col-span-12 md:col-span-8 bg-white rounded-3xl p-5">
      <ProductsFilter />
      <FilterCount name="Products" count="12" />
      <div className="flex flex-col gap-5 mt-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
