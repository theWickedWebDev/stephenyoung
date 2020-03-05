import React from 'react';

export class LazyLoad extends React.Component  {
  state = { visible: false };

  componentDidMount() { this.onScroll(); }

  componentDidUpdate() { this.onScroll(); }

  isScrolledIntoView() {
    const offset = this.props.offset || 0;
    if (!this.componentRef) return null;

    const rect = this.componentRef.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    return elemTop - offset < window.innerHeight && elemBottom + offset >= 0;
  }

  onScroll = () => {
    if (this.isScrolledIntoView() && !this.state.visible) {
      this.setState({ visible: true });
    }
  };

  render() {
    const { visible } = this.state;
    const { children, skeleton } = this.props;

    if (visible) {
      return children;
    } else {
      return (
        <div ref={ elem => this.componentRef = elem }>
          <WindowScroll onChange={this.onScroll} />
          { skeleton }
        </div>
      );
    }
  }
}

export class WindowScroll extends React.Component {
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

  render() { return null; }
}

export default LazyLoad;
