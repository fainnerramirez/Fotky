import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Css Components
import HomeWrapp from './styles/Home.style';
import { COLOR } from './Colors';
import imageDefault from '../assets/defaultImage.png';

const CLIENT_API = process.env.REACT_APP_UNPLASH_KEY;

const fetchApi: Function = async (searchUser: string, root: HTMLElement) => {
  try {
    root.innerHTML = '';

    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?page=5&query=${searchUser}&&client_id=${CLIENT_API}`
    );

    const { results } = data;

    results.map((item: any, index: number) => {
      const { regular } = item.urls;
      let { name, location, profile_image } = item.user;
      const { large } = profile_image;
      const { download } = item.links;

      if (location === null) {
        location = 'not registered';
      }

      return (root.innerHTML += `
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
      `);
    });
  } catch (err: any) {
    console.error('Error: ', err);
  }
};

const Home: React.FC = () => {
  const [images, setImages] = useState('');
  const [image, setImage] = useState(imageDefault);

  const handleSearch = (e: any) => {
    e.preventDefault();
    setImage('');
    const root = document.getElementById('root-images');
    root ? fetchApi(images, root) : console.error('root es null: ', root);
    document.title = images;
  };

  useEffect(() => {
    const root = document.getElementById('root-images');
    root
      ? (root.innerHTML = `<img src=${image} alt="Image default app"/>`)
      : console.error('root es null: ', root);
  }, []);

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

          <button
            className="btn btn-success mx-3 px-4 py-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="root-images" id="root-images"></div>
    </HomeWrapp>
  );
};

export default Home;
