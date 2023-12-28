import React, { useState, useEffect } from "react";
import { Category, Property } from "./types";
import SubmittedValuesTable from "@/modules/shared/components/molecules/CategoryTable/CategoryTable";
import PropertySelect from "@/modules/shared/components/atoms/PropertySelect/PropertySelect";
import MainCategorySelect from "@/modules/shared/components/atoms/CategorySelect/CategorySelect";
import SubCategorySelect from "@/modules/shared/components/atoms/SubCategorySelect/SubCategorySelect";
import { useCategories } from "@/modules/shared/hooks/useCategories";
import { useProperties } from "@/modules/shared/hooks/useProperties";

function CatorySubCatPage() {
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const mainCategories: Category[] = useCategories();
  const properties = useProperties(selectedSubCategory);
  const [otherValues, setOtherValues] = useState<{
    [key: string]: string;
  }>({});
  useEffect(() => {
    if (selectedMainCategory) {
      setSubCategories(mainCategories[selectedMainCategory - 1]?.children);
    }
  }, [selectedMainCategory]);

  const handleMainCategoryChange = (event: any) => {
    setSelectedMainCategory(event.target.value);
  };
  const handleSubCategoryChange = (event: any) => {
    setSelectedSubCategory(event.target.value);
  };
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const [submittedValues, setSubmittedValues] = useState({});
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const handlePropertyChange = (event: any) => {
    setSelectedOptions((prevValues) => ({
      ...prevValues,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-4 mt-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 col-span-6"
      >
        {/* category */}
        <MainCategorySelect
          mainCategories={mainCategories}
          handleMainCategoryChange={handleMainCategoryChange}
        />

        {/* subCategory */}
        <SubCategorySelect
          subCategories={subCategories}
          handleSubCategoryChange={handleSubCategoryChange}
          selectedMainCategory={selectedMainCategory || ""}
        />

        {/* properties */}
        {properties.map((property: Property) => (
          <PropertySelect
            key={property.id}
            property={property}
            selectedOptions={selectedOptions}
            setOtherValues={setOtherValues}
            handlePropertyChange={handlePropertyChange}
            setSubmittedValues={setSubmittedValues}
          />
        ))}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
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
