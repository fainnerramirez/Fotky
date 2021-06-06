import { Wrapper } from './styles/stylesFooter/Footer.styles';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className="container-fluid ">
        <h3>
          Developed by
          <a href="https://github.com/FainnerRamirez-Web" target="_blank">
            {' '}
            Fainner Ramirez
          </a>
        </h3>
      </div>
    </Wrapper>
  );
};

export default Footer;
