import PropertyInput from "../PropertyInput/PropertyInput";

type PropertySelectProps = {
  property: {
    id: number;
    name: string;
    options: { name: string; value: string }[];
  };
  selectedOptions: { [key: string]: string };
  setOtherValues: (values: { [key: string]: string }) => void;
  setSubmittedValues: (values: { [key: string]: string }) => void;
  handlePropertyChange: (event: any) => void;
};

const PropertySelect: React.FC<PropertySelectProps> = ({
  property,
  selectedOptions,
  setOtherValues,
  setSubmittedValues,
  handlePropertyChange,
}) => {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={String(property.id)}
      >
        {property.name}
      </label>
      <select
        id={String(property.id)}
        value={selectedOptions[String(property.id)]}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handlePropertyChange(event);
          // @ts-ignore
          setSubmittedValues((prevValues) => ({
            ...prevValues,
            [property.id]: event.target.value,
          }));
        }}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">--Select an option</option>
        {property.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
        <option value="other">Other</option>
      </select>
      {selectedOptions[String(property.id)] === "other" && (
        <PropertyInput
          propertyId={property.id}
          setOtherValues={setOtherValues}
          setSubmittedValues={setSubmittedValues}
        />
      )}
    </div>
  );
};
export default PropertySelect;
