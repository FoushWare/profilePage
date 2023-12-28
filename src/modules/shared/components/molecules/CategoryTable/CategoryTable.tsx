import CategoryRow from "../../atoms/CategoryRow/CategoryRow";
import PropertyRow from "../../atoms/PropertyRow/PropertyRow";

type SubmittedValuesTableProps = {
  selectedMainCategory: number | null;
  selectedSubCategory: number | null;
  mainCategories: { id: number; name: string }[];
  subCategories: { id: number; name: string }[];
  submittedValues: { [key: string]: string };
  properties: { id: number; name: string }[];
  otherValues: { [key: string]: string };
};

const SubmittedValuesTable: React.FC<SubmittedValuesTableProps> = ({
  selectedMainCategory,
  selectedSubCategory,
  mainCategories,
  subCategories,
  submittedValues,
  properties,
  otherValues,
}) => (
  <div className="col-span-6 overflow-x-auto ">
    <h2 className="text-lg font-bold mb-4">Submitted Values</h2>
    <table className="w-full min-w-full divide-y divide-gray-200">
      <tbody className="bg-white divide-y divide-gray-200">
        {/* Category */}
        <CategoryRow
          title="Main Category"
          value={selectedMainCategory}
          categories={mainCategories}
        />
        {/* subCategory */}
        <CategoryRow
          title="Sub Category"
          value={selectedSubCategory}
          categories={subCategories}
        />
        {Object.entries(submittedValues).map(([key, value]) => (
          <PropertyRow
            key={key}
            index={key}
            value={value as string}
            properties={properties}
            otherValues={otherValues}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default SubmittedValuesTable;
