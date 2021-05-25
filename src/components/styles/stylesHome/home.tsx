import styled from "styled-components";
import * as COLOR from "../Colors";

const HomeWrapp = styled.section`
  width: 100%;

  .home {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .home__title {
      margin-bottom: 30px;

      h1 {
        color: ${COLOR.VERDE};
        font-size: 60px;
        font-family: "Amaranth", sans-serif;
        font-style: italic;
      }
    }

    .home__input {
      input {
        width: 800px;
        padding: 10px;
        border: 5px double ${COLOR.VERDE};
        border-radius: 35px;
        outline: none;
        text-align: center;
        font-family: "Amaranth", sans-serif;
        font-size: 20px;
      }
    }
  }

  .root-images {
    padding-top: 30px;
    background: ${COLOR.GRIS};
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export default HomeWrapp;
