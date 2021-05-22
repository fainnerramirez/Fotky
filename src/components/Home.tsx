import React from "react";
import HomeWrapp from "./styles/stylesHome/home";

const Home = () => {
  return (
    <HomeWrapp>
      <div className="home">
        <div className="home__title">
          <h1>FOTKY APP</h1>
        </div>
        <div className="home__input">
          <input
            type="text"
            placeholder="¡Busca cualquier foto! Ej. animales"
          />
        </div>
      </div>
    </HomeWrapp>
  );
};

export default Home;
