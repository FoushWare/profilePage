export interface ProductCardProps {
  product: {
    image: string;
    title: string;
    price: string;
    days: string;
    hours: string;
    minutes: string;
    label?: string;
  };
}
export type TimingMetricKey = "days" | "hours" | "minutes";
