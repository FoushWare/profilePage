type SubCategorySelectProps = {
  subCategories: { id: number; name: string }[];
  handleSubCategoryChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  selectedMainCategory: string;
};

const SubCategorySelect: React.FC<SubCategorySelectProps> = ({
  subCategories,
  handleSubCategoryChange,
  selectedMainCategory,
}) => (
  <div className="mb-6">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="sub-category"
    >
      Sub Category
    </label>
    <select
      id="sub-category"
      onChange={handleSubCategoryChange}
      disabled={!selectedMainCategory}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="">--Select Sub Category</option>
      {subCategories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  </div>
);

export default SubCategorySelect;
