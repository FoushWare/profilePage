type MainCategorySelectProps = {
  mainCategories: { id: number; name: string }[];
  handleMainCategoryChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

const MainCategorySelect: React.FC<MainCategorySelectProps> = ({
  mainCategories,
  handleMainCategoryChange,
}) => (
  <div className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="main-category"
    >
      Main Category
    </label>
    <select
      id="main-category"
      onChange={handleMainCategoryChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="">--Select Main Category</option>
      {mainCategories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  </div>
);
export default MainCategorySelect;
