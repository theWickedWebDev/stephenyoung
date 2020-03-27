import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const POS_X = 0;
    const POS_Y = 0;

    if (this.props.location !== prevProps.location) {
      window.scrollTo(POS_X, POS_Y);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
