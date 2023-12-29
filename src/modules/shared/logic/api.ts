import axios from "@/modules/shared/configurations/axiosConfig";

export const getAllCategories = async () => {
  const response = fetch("api/get_all_cats");
  const data = await (await response).json();
  return data.data.categories;
};

export const getProperties = async (selectedSubCategory: string) => {
  try {
    const response = await fetch(
      `api/get_properties?cat=${selectedSubCategory}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
