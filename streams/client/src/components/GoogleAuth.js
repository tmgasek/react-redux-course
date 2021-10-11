import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '926197885702-q6t88kfn0tputsa44chkouetkdsqdbhg.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
        });
    });
  }, []);

  useEffect(() => {
    const onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
        dispatch(signIn(auth.currentUser.get().getId()));
      } else {
        dispatch(signOut());
      }
    };

    if (auth) {
      onAuthChange(auth.isSignedIn.get());
      auth.isSignedIn.listen(onAuthChange);
    }
  }, [auth, dispatch]);

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthBtn = () => {
    if (isSignedIn === null) {
      return <div>ok</div>;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  };

  return <div>{renderAuthBtn()}</div>;
};

export default GoogleAuth;
