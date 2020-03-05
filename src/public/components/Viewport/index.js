import React from 'react';

export class Viewport extends React.Component {
  state = { viewport: 'desktop' }

  checkViewport() {
    let viewport = 'desktop';
    if (window.innerWidth <= BREAKPOINTS.mobile) {
      viewport = 'mobile';
    } else if (window.innerWidth <= BREAKPOINTS.tablet) {
      viewport = 'tablet';
    }

    if (this.state.viewport !== viewport) {
      this.setState({ viewport: viewport });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkViewport.bind(this));
    window.addEventListener('resize', this.checkViewport.bind(this));
    //AOS.init({ duration : 2000 });
    this.checkViewport();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkViewport.bind(this));
    window.removeEventListener('resize', this.checkViewport.bind(this));
  }

  render () {
    const { children } = this.props;
    const { viewport } = this.state;

    const classNames = [viewport];

    return (<div>{ children(viewport)}</div>)
  }
}

export default Viewport
