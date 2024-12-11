import { useEffect, useState } from "react";
import Dish from "../components/(foodMenu)/Dish";
import axios from "axios";
import { course } from "../utils/Types";
const Menu = () => {

  const [menues, setMenues] = useState<course[]>([])

  useEffect(() => {
    const apiToken = import.meta.env.VITE_API_TOKEN; 
    const url = import.meta.env.VITE_URL
    axios
      .get(`${url}menues`, {
        headers: {
          'api_token': apiToken, 
        }
      })
      .then((response) => {
        console.log(response.data);
        setMenues(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="flex flex-col space-y-8 items-center w-full py-48  justify-center flex-grow ">
      {menues.map((course, i) => (
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
