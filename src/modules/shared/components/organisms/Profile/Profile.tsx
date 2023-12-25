import SideBar from "@/modules/shared/components/organisms/SideBar/SideBar";
import ProductList from "@/modules/shared/components/organisms/ProductList/ProductList";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-12 gap-4 mt-12">
      <div className="col-span-12 md:col-span-4">
        <SideBar />
      </div>
      <div className="col-span-8 bg-blue-600">
        <ProductList />
      </div>
    </div>
  );
};

export default Profile;
