import styled from 'styled-components';
import * as COLOR from '../Colors';

export const Wrapper = styled.div`
  .container-fluid {
    background: ${COLOR.VERDE};
    padding: 50px 0px;
    h3 {
      text-align: center;
      color: ${COLOR.BLANCO};

      a {
        color: #33ff42;
        text-decoration: none;
      }
    }
  }
`;
