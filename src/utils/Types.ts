export interface ParallaxProps {
  imageUrl: string;
}

export type course = {
  name: string,
  retter: DishType[]
}

export type DishType = {
  navn: string;
  pris: string,
  beskrivelse: string,
  allergener: string,
  bilde: string
}