// @flow
// Dependencies
import * as React from 'react';

// Types
import type { LazyType, WindowScrollType } from '../flow-types';
type LazyState = {
  visible: boolean,
};

// Main
export class Lazy extends React.Component<LazyType, LazyState> {
  componentRef: ?HTMLElement;

  state = { visible: false };

  DEFAULT_OFFSET = 0;

  componentDidMount() { this.onScroll(); }


  componentDidUpdate() { this.onScroll(); }

  isScrolledIntoView() {
    const offset = this.props.offset || this.DEFAULT_OFFSET;
    if (!this.componentRef) return null;
    const rect = this.componentRef.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    return elemTop - offset < window.innerHeight &&
    elemBottom + offset >= this.DEFAULT_OFFSET;
  }

  onScroll = () => {
    if (this.isScrolledIntoView() && !this.state.visible) {
      this.setState({ visible: true });
    }
    return;
  };

  render() {
      const { visible } = this.state;
      const { children, skeleton } = this.props;

      if (visible) { return children || <div/>; }

      return (
        <div ref={(elem) => this.componentRef = elem}>
          <WindowScroll onChange={this.onScroll} />
          { skeleton || <div/> }
        </div>
      );
  }
}

export class WindowScroll extends React.Component<WindowScrollType> {
  static defaultProps = { onChange: () => {} }

  componentDidMount() {
      window.addEventListener('scroll', this.onWindowChange);
      window.addEventListener('resize', this.onWindowChange);
      this.onWindowChange();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.onWindowChange);
      window.removeEventListener('resize', this.onWindowChange);
  }

  onWindowChange = this.props.onChange;

  render() {
      return null;
  }
}

export default Lazy;
