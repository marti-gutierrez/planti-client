export type levels = {
  level: "low" | "medium" | "high";
  type: "care" | "irrigation" | "temperature" | "sun";
};
export type multiplication = {
  station: "spring" | "winter" | "summer" | "autumn" | "any";
  technique: string;
};

export type DataApi = {
  id: string;
  name: string;
  nameLarge: string;
  urlImage: string;
  uso: string;
  levels: levels[];
  provenance: string;
  description: string;
  substrate: string[];
  multiplication: multiplication;
};

// export { levels, multiplication, DataApi };
