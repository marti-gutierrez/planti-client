export interface levels {
  level: "low" | "medium" | "high";
  type: "care" | "irrigation" | "temperature" | "sun";
}
export interface multiplication {
  station: "spring" | "winter" | "summer" | "autumn" | "any";
  technique: string;
}

export interface DataApi {
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
}

// export { levels, multiplication, DataApi };
