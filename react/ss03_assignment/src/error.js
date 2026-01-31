import React from "react";
 
/* ERROR BOUNDARY */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error.message };
  }
  render() {
    if (this.state.hasError) {
      return <h3>{this.state.errorMsg}</h3>;
    }
    return this.props.children;
  }
}
/* FIRST COMPONENT */
class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  triggerError = () => {
    this.setState({ error: true });
  };
  render() {
    if (this.state.error) {
      throw new Error("Error occurred in First Component");
    }
    return <button onClick={this.triggerError}>First Component Error</button>;
  }
}
/* SECOND COMPONENT */
function SecondComponent() {
  return <h3>You are doing well !!</h3>;
}
/* THIRD COMPONENT */
class ThirdComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  triggerError = () => {
    this.setState({ error: true });
  };
  render() {
    if (this.state.error) {
      throw new Error("Error occurred in Third Component");
    }
    return <button onClick={this.triggerError}>Third Component Error</button>;
  }
}
/* APP COMPONENT */
function App() {
  return (
<div>
<ErrorBoundary>
<FirstComponent />
</ErrorBoundary>
 
      <SecondComponent />
 
      <ErrorBoundary>
<ThirdComponent />
</ErrorBoundary>
</div>
  );
}
export default App;