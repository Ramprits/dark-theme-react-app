import React from "react";

import SignIn from "../components/sign-in/Login";

export default function Login(props) {
  return (
    <React.Fragment>
      <SignIn
        content={{
          brand: {
            text: "Mobile Programming",
            image: "/images/logo-white.png",
            width: "100",
          },
          "02_header": "Welcome Back",
          ...props,
        }}
      />
    </React.Fragment>
  );
}
