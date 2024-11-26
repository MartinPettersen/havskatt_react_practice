import React from "react";
import menu from "../assets/Menu.json";
import Parallax from "../components/(utils)/Parallax";
import Dish from "../components/(foodMenu)/Dish";

const Menu = () => {
  console.log("menu", menu["menues"][0]);

  return (
    <div className="flex flex-col space-y-8 items-center w-full justify-center h-screen ">
      {menu["menues"].map((course, i) => (
        <div key={i} className="border-2 border-black">
          <h2 className="font-bold text-xl">{course.name}</h2>
          <div className="space-y-4">
            {course["retter"].map((dish, i) => (
              <Dish  key={i} dish={dish} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
