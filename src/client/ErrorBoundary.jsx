import React from "react";

export class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    // idealy it should log to sentry or other log service
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    // idealy display a custom page with error
    if (hasError) {
      return (
        <h2>Error!</h2>
      );
    }
    return children;
  }
}

export default ErrorBoundary;