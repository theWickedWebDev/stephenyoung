import React from 'react';

import Viewport from 'components/Viewport';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <Viewport>{ (viewport) => (
      <div className={`${viewport} default__layout`}>
        <div className="default__layout-content">
          <Navbar viewport={viewport}/>
          { children }
          <Footer/>
        </div>
      </div>
    )}</Viewport>
  );
};

export default DefaultLayout;
