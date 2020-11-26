// src/components/auth-nav.js is fully copy and paste from https://auth0.com/blog/complete-guide-to-react-user-authentication/

import React from "react";
import AuthenticationButton from "./authentication-button";

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
);

export default AuthNav;