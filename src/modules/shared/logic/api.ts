import axios from "@/modules/shared/configurations/axiosConfig";

export const getAllCategories = async () => {
  try {
    const response = await axios.get("/get_all_cats");
    return response.data.data.categories;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const getProperties = async (selectedSubCategory: string) => {
  try {
    const response = await axios.get(`/properties?cat=${selectedSubCategory}`);
    return response.data.data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
