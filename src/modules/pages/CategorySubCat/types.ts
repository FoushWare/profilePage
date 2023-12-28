export interface Category {
  id: number;
  name: string;
}
export interface Property {
  id: number;
  name: string;
}
export type MockChildProperties = { [index: number]: Property[] };
export type MockOptions = { [index: number]: string[] };
export type MockSubCategoriesType = {
    [key: number]: { id: number; name: string; }[];
  };