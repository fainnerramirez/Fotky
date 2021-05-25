import React, { useState, useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";
//Css Components
import HomeWrapp from "./styles/stylesHome/home";
//config dotenv
dotenv.config();
//variables de entorno
const CLIENT_API = process.env.REACT_APP_UNPLASH_KEY;

const fetchApi = async (searchUser: string, root: HTMLElement) => {
  try {
    root.innerHTML = "";
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?&query=${searchUser}&&client_id=${CLIENT_API}`
    );

    const { data } = response;
    const { results } = data;

    results.map((item: any) => {
      const { regular } = item.urls;
      const img = document.createElement("img");
      img.src = regular;
      //styles img
      img.style.width = "300px";
      img.style.height = "250px";
      img.style.marginBottom = "30px";
      img.style.marginTop = "30px";
      img.style.borderRadius = "7px";
      root.append(img);
    });
  } catch (err: any) {
    console.log("Error: ", err);
  }
};

const Home: React.FC = () => {
  const [images, setImages] = useState("");

  useEffect(() => {
    const root = document.getElementById("root-images") || null;
    root ? fetchApi(images, root) : console.log("root es null: ", root);
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
            placeholder="¡Search! Example: cats"
            id="input-search"
            onChange={(e) => setImages(e.target.value)}
          />
        </div>
      </div>
      <div className="root-images" id="root-images"></div>
    </HomeWrapp>
  );
};

export default Home;
