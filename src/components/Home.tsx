import React, { useState, useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";
//Css Components
import HomeWrapp from "./styles/stylesHome/home";
//Bootstrap 4
import Card from "react-bootstrap/Card";
//config dotenv
dotenv.config();
//const
const CLIENT_API = process.env.REACT_APP_UNPLASH_KEY;

/*
type Props = {
  url: string;
  alt?: string;
};
*/
const fetchApi: Function = async (SEARCH_USER: string) => {
  return await axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&query=${SEARCH_USER}&&client_id=${CLIENT_API}`
    )
    .then(function (res: any) {
      const cardColumn = document.getElementById("card-column");
      res.data.results.map((item: any) => {
        cardColumn
          ? (cardColumn.innerHTML += `
        <div class="card" style="width: 300px">
        <img src=${item.urls.regular} class="card-img-top" alt="image api" style="width: 100%; height="250px">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
          `)
          : console.log("Error");
      });
    })
    .catch(function (error: any) {
      console.log(error);
    });
};

const getImages: Function = (inputUser: string) => {
  const inputSearch = document.getElementById("input-search");
  inputSearch?.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      e.preventDefault();
      fetchApi(inputUser);
    } else {
      console.log("error al cargar la img");
    }
  });
};

const Home: React.FC = () => {
  const [images, setImages] = useState("");

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
        </div>
      </div>
      <div id="card-column" className="card-column">
        {getImages(images)}
      </div>
    </HomeWrapp>
  );
};

export default Home;
