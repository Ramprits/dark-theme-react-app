import React from "react";

import SignUp from "../components/sign-in/Register";

export default function Register(props) {
  return (
    <React.Fragment>
      <SignUp
        content={{
          brand: {
            text: "Mobile Programming",
            image: "/images/logo-white.png",
            width: "100",
          },
          ...props,
        }}
      />
    </React.Fragment>
  );
}
