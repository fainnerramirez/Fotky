import React, { useState, useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";
//Css Components
import HomeWrapp from "./styles/stylesHome/home";
//Bootstrap 4
import Button from "react-bootstrap/Button";
//config dotenv
dotenv.config();
//const
const CLIENT_API = process.env.REACT_APP_UNPLASH_KEY;

const fetchApi = (searchUser: string, root: HTMLElement) => {
  return axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&query=${searchUser}&&client_id=${CLIENT_API}`
    )
    .then(({ data }) => {
      const { results } = data;

      results.map((item: any) => {
        const { regular } = item.urls;
        const img = document.createElement("img");
        img.src = regular;
        root.append(img);
      });
    })
    .catch(console.error);
};

const Home: React.FC = () => {
  const [images, setImages] = useState("");

  useEffect(() => {
    const root = document.getElementById("root-images") || null;
    root ? fetchApi("dogs", root) : console.log("root es null: ", root);
  });

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
            id="input-search"
            onChange={(e) => setImages(e.target.value)}
          />
          <Button className="ml-4">Buscar</Button>
        </div>
      </div>
      <div id="root-images"></div>
    </HomeWrapp>
  );
};

export default Home;
