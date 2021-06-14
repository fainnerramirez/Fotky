import { Wrapper } from './styles/Footer.styles';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className="container-fluid ">
        <h4>
          Developed by
          <a
            href="https://github.com/FainnerRamirez-Web"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Fainner Ramirez
          </a>
        </h4>
      </div>
    </Wrapper>
  );
};

export default Footer;
