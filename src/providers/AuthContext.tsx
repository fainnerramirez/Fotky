import React from 'react';
import AuthContext from './Store';
import { app } from '../firebase/index';
import 'firebase/auth';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  //Form
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [nameUser, setNameUser] = React.useState<string>('');
  const [warningName, setWarningName] = React.useState<boolean>(false);
  const [warningEmail, setWarningEmail] = React.useState<boolean>(false);
  const [warningPassword, setWarningPassword] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  //Firebase
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);
  const [userNameFirebase, setUserNameFirebase] = React.useState<string>('');
  const [urlPhotoFirebase, setUrlPhotoFirebase] = React.useState<string>('');

  const isAuthenticated: Function = () => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let { user } = userCredential;

        user
          ?.updateProfile({
            displayName: nameUser,
            //photoURL: `https://ui-avatars.com/api/?background=random&name=${nameUser}`,
            photoURL: `https://www.avatarapi.com/js.aspx?email=${email}&size=128`,
          })
          .then(function () {
            // Update successful.
            setUserNameFirebase(user.displayName);
            setUrlPhotoFirebase(user.photoURL);
            console.log('User Update');
          })
          .catch(function (error) {
            // An error happened
            console.error(error);
          });

        setAuthenticated(true);
      })
      .catch((error) => {
        console.log(error.message, error.code);

        switch (error.code) {
          case 'auth/email-already-in-use': {
            setAuthenticated(false);
            setWarningEmail(true);
            setMessage(error.message);
            break;
          }

          case 'auth/invalid-email': {
            setAuthenticated(false);
            setWarningEmail(true);
            setMessage(error.message);
            break;
          }

          case 'auth/weak-password': {
            setAuthenticated(false);
            setWarningPassword(true);
            setMessage(error.message);
            break;
          }
        }
      });
  };

  return (
    <AuthContext.Provider
      value={{
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
