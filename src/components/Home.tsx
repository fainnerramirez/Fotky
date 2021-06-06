import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
//Css Components
import HomeWrapp from './styles/stylesHome/home';
import * as COLOR from './styles/Colors';
//config dotenv
dotenv.config();
//variables de entorno
const CLIENT_API = process.env.REACT_APP_UNPLASH_KEY;

const fetchApi: Function = async (searchUser: string, root: HTMLElement) => {
  try {
    root.innerHTML = '';

    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=5&query=${searchUser}&&client_id=${CLIENT_API}`
    );

    const { data } = response;
    const { results } = data;

    results.map((item: any, index: number) => {
      const { regular } = item.urls;
      let { name, location, profile_image } = item.user;
      const { large } = profile_image;
      const { download } = item.links;

      if (location === null) {
        location = 'not registered';
      }

      root.innerHTML += `
      <div key=${index} class="card mt-4 mb-4" style="width: 20rem; border-radius: 50px;
      background: #e8e8e8;
      box-shadow:  20px 20px 60px #c5c5c5,-20px -20px 60px #ffffff;">
          <img class="card-img-top" src=${regular} alt="Card image cap" style="width: 100%; height: 250px;">
          <div class="card-body text-center" style="width: 100%">
            <img class="card-img-top" src=${large} alt="Card image cap" style="border-radius: 50%; width: 100px; height: 100px;">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-title">${location} </h6>
            <a href=${download} target="_blank" class="btn" style="background: ${COLOR.VERDE}; color: #ffffff">Download Image</a>
          </div>
      </div>
      `;
    });
  } catch (err: any) {
    console.error('Error: ', err);
  }
};

const Home: React.FC = () => {
  const [images, setImages] = useState('');

  useEffect(() => {
    const root = document.getElementById('root-images');
    root ? fetchApi(images, root) : console.error('root es null: ', root);
    document.title = images;
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
      <div className="root-images" id="root-images">
        <h1>Aun no ha buscado nada</h1>
      </div>
    </HomeWrapp>
  );
};

export default Home;
