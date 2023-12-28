// useProperties.ts
import { useEffect, useState } from "react";
import { getProperties } from "@/modules/shared/logic/api";

export const useProperties = (selectedSubCategory: string | null) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (selectedSubCategory) {
      const fetchProperties = async () => {
        const properties = await getProperties(selectedSubCategory);
        setProperties(properties);
      };

      fetchProperties();
    }
  }, [selectedSubCategory]);

  return properties;
};
