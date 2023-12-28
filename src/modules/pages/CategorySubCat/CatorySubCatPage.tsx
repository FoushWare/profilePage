import React, { useState, useEffect } from "react";
import { Category, Property } from "./types";
import {
  mockChildProperties,
  mockMainCategories,
  mockOptions,
  mockProperties,
  mockSubCategories,
} from "./mocks";

// Define the Form component
function CatorySubCatPage() {
  // Define state variables for main categories, subcategories, and the selected main and subcategory
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperties, setSelectedProperties] = useState("");
  const [childProperties, setChildProperties] = useState<Property[]>([]);
  const [selectedChildProperties, setSelectedChildProperties] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    setMainCategories(mockMainCategories);
  }, []);

  useEffect(() => {
    if (selectedMainCategory) {
      setSubCategories(mockSubCategories[selectedMainCategory]);
    }
  }, [selectedMainCategory]);

  useEffect(() => {
    if (selectedSubCategory) {
      setProperties(mockProperties[selectedSubCategory]);
    }
  }, [selectedSubCategory]);

  const [otherValues, setOtherValues] = useState<{
    [key: string]: string;
  }>({});
  useEffect(() => {
    const selectedPropertyId = Number(Object.keys(selectedProperties)[0]);
    if (selectedPropertyId) {
      setChildProperties(mockChildProperties[selectedPropertyId] || []);
    }
  }, [selectedProperties]);
  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    propertyId: number
  ) => {
    const selectedValue = event.target.value;

    if (selectedValue === "Other") {
      setSubmittedValues((prevValues) => ({
        ...prevValues,
        [propertyId]: otherValues[propertyId],
      }));
    } else {
      setSubmittedValues((prevValues) => ({
        ...prevValues,
        [propertyId]: selectedValue,
      }));
    }
  };

  // Define a handler for the main category change event
  const handleMainCategoryChange = (event: any) => {
    setSelectedMainCategory(event.target.value);
  };
  console.log("otherValues", otherValues);

  // Define a handler for the subcategory change event
  const handleSubCategoryChange = (event: any) => {
    setSelectedSubCategory(event.target.value);
  };
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const handlePropertyChange = (event: any) => {
    const propertyId = event.target.id;
    const selectedValue = event.target.value;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [propertyId]: selectedValue,
    }));
  };

  // TODO: Implement the rest of the form logic
  const [submittedValues, setSubmittedValues] = useState({});
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmittedValues(selectedOptions);
  };
  // Render the form
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-4 mt-4">
      {" "}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 col-span-6"
      >
        {/* category */}
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
        {/* subCategory */}
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

        {/* properties */}
        {properties.map((property) => (
          <div className="mb-6" key={property.id}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={property.id.toString()}
            >
              {property.name}
            </label>
            <select
              id={property.id.toString()}
              onChange={handlePropertyChange}
              disabled={!selectedSubCategory}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">{`--Select a ${
                property.name.split(" ")[0]
              }`}</option>
              {mockOptions[property.id].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              <option value="other">Other</option>
            </select>
            {selectedOptions[String(property.id)] === "other" && (
              <input
                type="text"
                placeholder="Enter a value"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                onChange={
                  (event: React.ChangeEvent<HTMLInputElement>) => {
                    setOtherValues((prevValues) => ({
                      ...prevValues,
                      [property.id]: event.target.value,
                    }));
                  }
                  // handleInputChange
                }
              />
            )}
          </div>
        ))}

        {/* child properties */}
        {/* TODO: Render the property dropdowns and input fields */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {/* Table to display the submitted values */}
      <div className="col-span-6 overflow-x-auto ">
        <h2 className="text-lg font-bold mb-4">Submitted Values</h2>
        <table className="w-full min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Main Category
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {selectedMainCategory !== null
                  ? mainCategories[selectedMainCategory - 1]?.name
                  : "N/A"}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Sub Category
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                log={console.log("selectedSubCategory", selectedSubCategory)}
              >
                {selectedSubCategory !== null
                  ? subCategories[selectedSubCategory - 1]?.name
                  : "N/A"}
              </td>
            </tr>
            {Object.entries(submittedValues).map(([key, value], index) => (
              <tr key={key} log={console.log("index", index)}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {properties.find((property) => property.id === Number(key))
                    ?.name ?? "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {value === "other"
                    ? otherValues[index + 1]
                    : (value as string)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CatorySubCatPage;
