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
        root.innerHTML += `
         <div class="card" style="width: 300px">
           <img src=${item.urls.regular} class="card-img-top" alt="image api" style="width: 100%; height="250px">
           <div class="card-body">
             <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
           </div>
         </div>`;
      });
    })
    .catch(console.error);
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
