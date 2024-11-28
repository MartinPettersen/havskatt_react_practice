import React from "react";
import menu from "../assets/Menu.json";
import Dish from "../components/(foodMenu)/Dish";

const Menu = () => {
  console.log("menu", menu["menues"][0]);

  return (
    <div className="flex flex-col space-y-8 items-center w-full py-48  justify-center flex-grow ">
      {menu["menues"].map((course, i) => (
        <section
          key={i}
          className="w-[80%] md:w-[100%]"
          aria-labelledby={course.name}
        >
          <div className="w-full flex items-center justify-center">
            <h2 id={course.name} className="font-bold text-2xl p-4">{course.name}</h2>
          </div>
          <ul className="space-y-0">
            {course["retter"].map((dish, i) => (
              <li key={i}>
                <Dish dish={dish} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Menu;
