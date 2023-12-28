export interface Category {
  id: number;
  name: string;
  children: [];
}

export interface Property {
  id: number;
  name: string;
  options: { name: string; value: string }[];
}
export type MockChildProperties = { [index: number]: Property[] };
export type MockOptions = { [index: number]: string[] };
export type MockSubCategoriesType = {
  [key: number]: { id: number; name: string }[];
};
