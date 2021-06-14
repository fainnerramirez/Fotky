import React from 'react';
import { app } from '../firebase/index';
import { COLOR } from './Colors';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleInputEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let { user } = userCredential;
        console.log('Usuario Creado: ', user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });

    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ margin: 'auto', width: '600px' }}>
      <div
        style={{
          margin: '10px',
          textAlign: 'center',
          color: `${COLOR.VERDE}`,
        }}
      >
        <h1>Login Fotky</h1>
      </div>

      <form action="">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInputEmail}
            value={email}
            name="email"
            required
          />
          <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
            Write a valid email to send you a verification email
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleInputPassword}
            name="password"
            value={password}
            required
          />
          <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
            The password must be a minimum of 6 characters
          </div>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
