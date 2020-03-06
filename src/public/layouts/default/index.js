import React from 'react'
import AOS from 'aos';

import { Favicon } from 'components/Meta';
import Viewport from 'components/Viewport';
import { Compressed as MobileNav } from 'components/Navbar';
import Footer from 'components/Footer';

const DefaultLayout  = props => {
  const { children } = props;

  return (
    <Viewport>{ viewport => (
      <div className={`${viewport} default__layout`}>
        <div className="default__layout-content">
          <MobileNav/>
            { children }
          <Footer/>
        </div>
      </div>
    )}</Viewport>
  );
}

export default DefaultLayout
