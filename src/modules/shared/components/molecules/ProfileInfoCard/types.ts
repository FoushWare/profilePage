export type AudienceMetrics = {
  icon: string;
  count: number;
  name: string;
};

export type ProfileInfoCardProps = {
  avatarUrl: string;
  name: string;
  description: string;
  metrics: AudienceMetrics[];
};
