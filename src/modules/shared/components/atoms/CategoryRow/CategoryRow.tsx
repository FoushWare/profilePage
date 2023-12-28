export type CategoryRowProps = {
  title: string;
  value: number | null;
  categories: { id: number; name: string }[];
};

const CategoryRow: React.FC<CategoryRowProps> = ({
  title,
  value,
  categories,
}) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {title}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {value !== null
        ? categories.find((category) => Number(category.id) === Number(value))
            ?.name || "N/A"
        : "N/A"}
    </td>
  </tr>
);

export default CategoryRow;
