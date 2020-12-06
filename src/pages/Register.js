import React from 'react';

import VerticalNav3 from '../components/vertical-navs/VerticalNav3';
import SignIn1 from '../components/sign-in/SignIn1';

export default function Register() {
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
          <SignIn1
            content={{
              brand: {
                text: 'Mobile Programming',
                image: '/images/logo-white.png',
                width: '100',
              },
            }}
          />,
        ]}
      />
    </React.Fragment>
  );
}

