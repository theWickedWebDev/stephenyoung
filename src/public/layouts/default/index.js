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
      <div className={viewport}>
        <MobileNav/>
          { children }
        <Footer/>
      </div>
    )}</Viewport>
  );
}

export default DefaultLayout
