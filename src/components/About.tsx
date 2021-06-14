import { Wrapper } from './styles/About.style';
import logo from '../assets/profile.png';

const About: React.FC = () => {
  return (
    <Wrapper className="container d-sm-flex text-center">
      <div className="description col-6">
        <h1>
          Hi, my name is <span className="text-warning">Fainner Ramirez</span>
        </h1>
        <article>
          <p>
            Hello, my name is Fainner Ramirez and I am a web application
            developer, especially on the frontend. I am passionate about the
            interaction of an interface with the user and I focus on seeking the
            closest friendship between human beings and machines. Any questions
            and concerns, do not hesitate to contact me:
            <br /> Linkedin:{' '}
            <a href="https://www.linkedin.com/in/fainnerramirez/">
              Ir a mi linkedin
            </a>
          </p>
        </article>
      </div>
      <div className="image col-6">
        <img src={logo} alt="Profile" />
      </div>
    </Wrapper>
  );
};

export default About;
