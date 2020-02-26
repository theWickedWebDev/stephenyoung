import React from 'react'

import AOS from 'aos';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

class DefaultLayout extends React.Component {
  componentDidMount() {
    AOS.init({ duration : 2000 });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Navbar/>
        { children }
        <Footer/>
      </div>
    );
  }
}

export default DefaultLayout
