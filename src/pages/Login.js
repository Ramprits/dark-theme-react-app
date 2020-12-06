import React from 'react';

import VerticalNav3 from '../components/vertical-navs/VerticalNav3';
import SignIn2 from '../components/sign-in/SignIn2';

export default function Login() {
  return (
    <React.Fragment>
      <VerticalNav3
        content={{
          brand: {
            text: 'Mobile Programming',
            image: '/images/logo-white.png',
            width: '70',
          },
          'brand-small': {
            text: 'Mobile Programming',
            image: '/images/logo-white.png',
            width: '50',
          },
          link2: 'Home',
          link3: 'Product',
          link4: 'Service',
        }}
        bucketMain={[
          <SignIn2
            content={{
              brand: {
                text: 'Mobile Programming',
                image: '/images/logo-white.png',
                width: '100',
              },
              '02_header': 'Welcome Back',
            }}
          />,
        ]}
      />
    </React.Fragment>
  );
}

