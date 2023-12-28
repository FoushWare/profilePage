// useCategories.ts
import { useEffect, useState } from "react";
import { getAllCategories } from "@/modules/shared/logic/api";

export const useCategories = () => {
  const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getAllCategories();
      setMainCategories(categories);
    };

    fetchCategories();
  }, []);

  return mainCategories;
};
