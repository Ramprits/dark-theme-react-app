import React from "react";

import VerticalNav3 from "../components/vertical-navs/VerticalNav3";
import Header from "../components/headers/Header4";
import Features from "../components/features/Features4";

export default function Index() {
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
        bucketMain={[
          <React.Fragment>
            <Header content={null} />, <Features content={null} />
          </React.Fragment>,
        ]}
      />
    </React.Fragment>
  );
}
