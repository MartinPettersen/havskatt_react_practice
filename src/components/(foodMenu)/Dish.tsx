import { useEffect, useState } from "react";
import Parallax from "../(utils)/Parallax";
import { DishType } from "../../utils/Types";

type Props = {
  dish: DishType;
};

const Dish = ({ dish }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const imagePath = `../../assets/${dish.bilde}`;
        const imageModule = await import(/* @vite-ignore */ imagePath);
        setImageUrl(imageModule.default);
      } catch (error) {
        console.error(`Error loading image: ${dish.bilde}`, error);
        setImageUrl(null);
      }
    };

    getImage();
  }, [dish.bilde]);

  if (imageUrl === null) {
    return (
      <div>loading</div>
    )
  }

  return (
    <Parallax imageUrl={imageUrl} altText={`Bilde av ${dish.navn}`}>
      <div className="w-full flex items-center justify-center">
        <div >
          <h3 className="font-bold text-lg">{dish.navn}</h3>
          <p>{dish.beskrivelse}</p>
          <p><strong>Allergener:</strong> {dish.allergener}</p>
          <p aria-label="Pris">{dish.pris} kr</p>
        </div>
      </div>
    </Parallax>
  );
};

export default Dish;
