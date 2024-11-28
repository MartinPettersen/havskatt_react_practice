import image from "./assets/igor-starkov-8PW9y8XQTFg-unsplash.jpg";
import Description from "./components/(home)/Description";
import Parallax from "./components/(utils)/Parallax";

const Home = () => {
  return (
    <Parallax
      imageUrl={image}
      altText="Pen kvinne sitter i en restaurant ved havet"
    >
      <Description />
    </Parallax>
  );
};

export default Home;
