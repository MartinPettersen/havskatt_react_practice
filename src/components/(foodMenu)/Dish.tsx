import React, { useEffect, useState } from "react";
import Parallax from "../(utils)/Parallax";
import { DishType } from "../../utils/Types";

type Props = {
    dish: DishType;
};

const Dish = ({ dish }: Props) => {

    const [imageUrl, setImageurl] = useState<string | null>(null);

    useEffect(() => {

        const getImage = async () => {

            const images = import.meta.glob<Record<string, string>>("../assets/*.{png,jpg,jpeg,svg}");
            const imageKey = `../assets/${dish.bilde}`;
            
            if (images[imageKey]) {
                const temp = await images[imageKey]
                setImageurl(temp.default || temp)
                
            } else {
                setImageurl(null)
            }
        }

        getImage()
    })

  return (
    <Parallax imageUrl={imageUrl}>
      <div>
        <h3>{dish.navn}</h3>
        <p>{dish.beskrivelse}</p>
        <p>Allergener: {dish.allergener}</p>
        <p>{dish.pris} kr</p>
      </div>
    </Parallax>
  );
};

export default Dish;
