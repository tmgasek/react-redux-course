import React from 'react';

import { GoogleLogout } from 'react-google-login';

const clientId =
  '926197885702-q6t88kfn0tputsa44chkouetkdsqdbhg.apps.googleusercontent.com';

const Logout = () => {
  const onSuccess = () => {
    alert('logout successful');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
