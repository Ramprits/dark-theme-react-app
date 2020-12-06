import React from 'react';

import VerticalNav3 from '../components/vertical-navs/VerticalNav3';
import Header4 from '../components/headers/Header4';
import Features4 from '../components/features/Features4';

export default function Index() {
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
        bucketMain={[<Header4 content={null} />, <Features4 content={null} />]}
      />
    </React.Fragment>
  );
}

