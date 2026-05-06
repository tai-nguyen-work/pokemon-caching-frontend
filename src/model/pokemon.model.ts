export interface Pokemon {
  id: number;
  name: string;
  frontImage: string;
  backImage: string;
  baseExperience: number;
  height: number;
  weight: number;
  abilities: string[]
  legacyCry: string;
  latestCry: string;
  stats: Array<{
    baseStat: number;
    name: string;
  }>;
  types: string[];
  sprites: {
    frontDefault: string;
    otherHomeFrontShiny: string;
    otherShowdownFrontDefault: string;
  };
}