import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { signIn, signOut } from '../../actions';

const clientId =
  '926197885702-q6t88kfn0tputsa44chkouetkdsqdbhg.apps.googleusercontent.com';

const Login = () => {
  const dispatch = useDispatch();

  const onSucces = (res) => {
    console.log('Login success, currentUser:', res.profileObj);
    dispatch(signIn('TODO id'));
  };
  const onFailure = (res) => {
    console.log('Login failed, res:', res);
    dispatch(signOut());
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSucces}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
