import styled from "styled-components";
import * as COLOR from "../Colors";

const NavbarWrapp = styled.section`
  .navbar {
    .navbar__logo {
      img {
        width: 100px;
        height: 100px;
      }
    }

    .navbar__nav {
      .navbar__nav__link {
        .link {
          a {
            color: ${COLOR.VERDE};
            font-size: 18px;
            font-weight: bold;
            text-decoration: none;
          }
        }
        .navbar__nav__link--button {
          border: none;
          background: ${COLOR.VERDE};
          color: #fdfaf6;
          font-size: 18px;
        }
      }
    }
  }
`;

export default NavbarWrapp;
