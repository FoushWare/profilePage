import React, { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  id: number;
  name: string;
}
interface Property {
  id: number;
  name: string;
}
type MockChildProperties = { [index: number]: Property[] };
type MockOptions = { [index: number]: string[] };

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

  console.log("selectedProperties===>", selectedProperties);
  const mockMainCategories = [
    { id: 1, name: "Cars" },
    { id: 2, name: "Motorcycles" },
  ];

  const mockSubCategories = {
    1: [
      { id: 1, name: "Sedans" },
      { id: 2, name: "SUVs" },
      { id: 3, name: "Trucks" },
    ],
    2: [
      { id: 4, name: "Sport" },
      { id: 5, name: "Cruiser" },
      { id: 6, name: "Touring" },
    ],
  };
  const mockOptions: MockOptions = {
    1: ["Red", "Blue", "Green"],
    2: ["1.0L", "1.5L", "2.0L"],
    3: ["Brand A", "Brand B", "Brand C"],
    4: ["Red", "Blue", "Green"],
    5: ["1.0L", "1.5L", "2.0L"],
    6: ["Brand A", "Brand B", "Brand C"],
    7: ["Red", "Blue", "Green"],
    8: ["1.0L", "1.5L", "2.0L"],
    9: ["Brand A", "Brand B", "Brand C"],
    10: ["Red", "Blue", "Green"],
    11: ["1.0L", "1.5L", "2.0L"],
    12: ["Brand A", "Brand B", "Brand C"],
    13: ["Red", "Blue", "Green"],
    14: ["1.0L", "1.5L", "2.0L"],
    15: ["Brand A", "Brand B", "Brand C"],
    16: ["Red", "Blue", "Green"],
    17: ["1.0L", "1.5L", "2.0L"],
    18: ["Brand A", "Brand B", "Brand C"],
    19: ["Red", "Blue", "Green"],
    20: ["1.0L", "1.5L", "2.0L"],
    // Add more options as needed
  };

  const mockProperties = {
    1: [
      { id: 1, name: "Color" },
      { id: 2, name: "Engine Size" },
      { id: 3, name: "Brand" },
    ],
    2: [
      { id: 4, name: "Color" },
      { id: 5, name: "Engine Size" },
      { id: 6, name: "Brand" },
    ],
    3: [
      { id: 7, name: "Color" },
      { id: 8, name: "Engine Size" },
      { id: 9, name: "Brand" },
    ],
    4: [
      { id: 10, name: "Color" },
      { id: 11, name: "Engine Size" },
      { id: 12, name: "Brand" },
    ],
    5: [
      { id: 13, name: "Color" },
      { id: 14, name: "Engine Size" },
      { id: 15, name: "Brand" },
    ],
    6: [
      { id: 16, name: "Color" },
      { id: 17, name: "Engine Size" },
      { id: 18, name: "Brand" },
    ],
  };
  const mockChildProperties: MockChildProperties = {
    1: [
      { id: 1, name: "Color" },
      { id: 2, name: "Engine Size" },
      { id: 3, name: "Brand" },
    ],
    2: [
      { id: 4, name: "Color" },
      { id: 5, name: "Engine Size" },
      { id: 6, name: "Brand" },
    ],
    // Add more child properties as needed
  };

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

  useEffect(() => {
    const selectedPropertyId = Number(Object.keys(selectedProperties)[0]);
    if (selectedPropertyId) {
      setChildProperties(mockChildProperties[selectedPropertyId] || []);
    }
  }, [selectedProperties]);

  // Define a handler for the main category change event
  const handleMainCategoryChange = (event: any) => {
    setSelectedMainCategory(event.target.value);
  };

  // Define a handler for the subcategory change event
  const handleSubCategoryChange = (event: any) => {
    setSelectedSubCategory(event.target.value);
  };
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  // const handleInputChange = (id, event) => {
  //   setSelectedOptions({
  //     ...selectedOptions,
  //     [String(id)]: event.target.value,
  //   });
  // };
  const handlePropertyChange = (event: any) => {
    const propertyId = event.target.id;
    const selectedValue = event.target.value;

    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [propertyId]: selectedValue,
    }));
  };

  // TODO: Implement the rest of the form logic

  // Render the form
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
  );
}

export default CatorySubCatPage;
