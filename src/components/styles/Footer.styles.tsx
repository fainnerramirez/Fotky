import styled from 'styled-components';
import { COLOR } from '../Colors';

export const Wrapper = styled.div`
  .container-fluid {
    margin-top: 130px;
    background: ${COLOR.VERDE};
    padding: 30px 0px;
    h4 {
      text-align: center;
      color: ${COLOR.BLANCO};

      a {
        color: #33ff42;
        text-decoration: none;
      }
    }
  }
`;
