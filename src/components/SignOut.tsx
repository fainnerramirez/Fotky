import React from 'react';
import AuthContext from '../providers/Store';
import { COLOR } from './Colors';

const SignOut: React.FC = (): React.ReactElement => {
  const {
    isAuthenticated,
    email,
    password,
    nameUser,
    setEmail,
    setPassword,
    setNameUser,
    warningName,
    setWarningName,
    warningEmail,
    setWarningEmail,
    warningPassword,
    setWarningPassword,
    message,
    setMessage,
    authenticated,
    setAuthenticated,
    userNameFirebase,
    setUserNameFirebase,
    urlPhotoFirebase,
    setUrlPhotoFirebase,
  } = React.useContext(AuthContext);

  const handleInputName = (e: any) => {
    setWarningName(true);
    setNameUser(e.target.value);
  };

  const handleInputEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      isAuthenticated();
    } catch (error) {
      console.error(error);
    } finally {
      setNameUser('');
      setEmail('');
      setPassword('');
      setWarningName(false);
    }
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
        <h1>Sign Out Fotky</h1>
      </div>

      <form action="">
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name user
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            onChange={handleInputName}
            value={nameUser}
            name="nameUser"
            required
          />
          {warningName && (
            <div id="emailHelp" className="form-text text-success">
              <i className="fas fa-check-circle"></i> correctly!
            </div>
          )}
        </div>
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
          {warningEmail && (
            <div id="emailHelp" className="form-text text-danger">
              <i className="fas fa-times-circle"></i> {message}
            </div>
          )}
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
          {warningPassword && (
            <div id="emailHelp" className="form-text text-danger">
              <i className="fas fa-times-circle"></i> {message}
            </div>
          )}
        </div>

        {authenticated && (
          <div className="p-3 mb-2 bg-success text-white text-center">
            <i className="fas fa-check-circle"></i> ¡User created correctly!
          </div>
        )}

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Sing Out
        </button>
      </form>
    </div>
  );
};

export default SignOut;
