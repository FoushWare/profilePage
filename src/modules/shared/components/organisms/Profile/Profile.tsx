import SideBar from "@/modules/shared/components/organisms/SideBar/SideBar";
import ProductList from "@/modules/shared/components/organisms/ProductList/ProductList";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-12 gap-4 mt-12">
      <SideBar />
      <ProductList />
    </div>
  );
};

export default Profile;
