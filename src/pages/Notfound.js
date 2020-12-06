import React from "react";

import VerticalNav3 from "../components/vertical-navs/VerticalNav";
import HttpCode1 from "../components/http-codes/HttpCode1";

export default function Notfound() {
  return (
    <React.Fragment>
      <VerticalNav3
        content={{
          brand: {
            text: "Mobile Programming",
            image: "/images/logo-white.png",
            width: "70",
          },
          "brand-small": {
            text: "Mobile Programming",
            image: "/images/logo-white.png",
            width: "50",
          },
          link2: "Home",
          link3: "Product",
          link4: "Service",
        }}
        bucketMain={[<HttpCode1 content={null} />]}
      />
    </React.Fragment>
  );
}
