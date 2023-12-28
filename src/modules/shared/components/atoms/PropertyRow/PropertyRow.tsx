type PropertyRowProps = {
  index: string;
  key: string;
  value: string;
  properties: { id: number; name: string }[];
  otherValues: { [key: string]: string };
};

const PropertyRow: React.FC<PropertyRowProps> = ({
  index,
  key,
  value,
  properties,
  otherValues,
}) => {
  const propertyIndex = properties.findIndex(
    (property) => Number(property.id) === Number(index)
  );
  return (
    <tr key={key}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {properties[propertyIndex]?.name ?? "N/A"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {value === "other" ? otherValues[propertyIndex + 1] : value}
      </td>
    </tr>
  );
};
export default PropertyRow;
