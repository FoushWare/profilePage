import React, { useState, useEffect } from "react";
import { Category, Property } from "./types";
import CategoryRow from "@/modules/shared/components/atoms/CategoryRow/CategoryRow";
import PropertyRow from "@/modules/shared/components/atoms/PropertyRow/PropertyRow";
import SubmittedValuesTable from "@/modules/shared/components/molecules/CategoryTable/CategoryTable";

function CatorySubCatPage() {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [properties, setProperties] = useState<Property[]>([]);

  const privateKey = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16";
  // categories
  useEffect(() => {
    fetch(`https://staging.mazaady.com/api/v1/get_all_cats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMainCategories(data.data.categories))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  useEffect(() => {
    if (selectedMainCategory) {
      setSubCategories(mainCategories[selectedMainCategory - 1]?.children);
    }
  }, [selectedMainCategory]);

  // Fetch properties when a sub category is selected
  useEffect(() => {
    if (selectedSubCategory) {
      fetch(
        `https://staging.mazaady.com/api/v1/properties?cat=${selectedSubCategory}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "private-key": privateKey,
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setProperties(data.data))
        .catch((error) => console.error("Fetch error:", error));
    }
  }, [selectedSubCategory]);

  const [otherValues, setOtherValues] = useState<{
    [key: string]: string;
  }>({});

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    propertyId: number
  ) => {
    const selectedValue = event.target.value;
    const selectedOptionName = properties
      .find((property) => property.id === propertyId)
      // @ts-ignore
      ?.options?.find((option) => option.id === Number(selectedValue))?.name;

    setSubmittedValues((prevValues) => ({
      ...prevValues,
      [propertyId]: selectedOptionName,
    }));
  };

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
              onChange={(e) => {
                handlePropertyChange(e);
                handleSelectChange(e, property.id);
              }}
              disabled={!selectedSubCategory}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">{`--Select a ${
                property.name.split(" ")[0]
              }`}</option>
              {/* @ts-ignore */}
              {property.options?.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}

              <option value="other">Other</option>
            </select>
            {selectedOptions[String(property.id)] === "other" && (
              <input
                type="text"
                placeholder="Enter a value"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setOtherValues((prevValues) => ({
                    ...prevValues,
                    [property.id]: event.target.value,
                  }));
                  setSubmittedValues((prevValues) => ({
                    ...prevValues,
                    [property.id]: event.target.value,
                  }));
                }}
              />
            )}
          </div>
        ))}

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
      <SubmittedValuesTable
        selectedMainCategory={selectedMainCategory}
        selectedSubCategory={selectedSubCategory}
        mainCategories={mainCategories}
        subCategories={subCategories}
        submittedValues={submittedValues}
        properties={properties}
        otherValues={otherValues}
      />
    </div>
  );
}

export default CatorySubCatPage;
