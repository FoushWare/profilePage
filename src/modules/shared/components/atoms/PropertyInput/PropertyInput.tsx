import React from "react";

type PropertyInputProps = {
  propertyId: number;
  setOtherValues: (values: { [key: string]: string }) => void;
  setSubmittedValues: (values: { [key: string]: string }) => void;
};

const PropertyInput: React.FC<PropertyInputProps> = ({
  propertyId,
  setOtherValues,
  setSubmittedValues,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // @ts-ignore
    setOtherValues((prevValues: { [key: string]: string }) => ({
      ...prevValues,
      [propertyId]: newValue,
    }));
    // @ts-ignore
    setSubmittedValues((prevValues: { [key: string]: string }) => ({
      ...prevValues,
      [propertyId]: newValue,
    }));
  };

  return (
    <div className="my-3">
      <input
        type="text"
        placeholder="Enter a value"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PropertyInput;
