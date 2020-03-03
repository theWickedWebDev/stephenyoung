import React from 'react'
import AOS from 'aos';

import Viewport from 'components/Viewport';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const DefaultLayout  = props => {
  const { children } = props;

  return (
    <Viewport>{ viewport => (
      <div className={viewport}>
        <Navbar/>
          { children }
        <Footer/>
      </div>
    )}</Viewport>
  );
}

export default DefaultLayout
