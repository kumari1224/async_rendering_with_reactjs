import React from "react";
import "./App.css";
import Page1 from "./Components/Page1";
import asyncComponentWrapper from "./Components/asyncComponent";

class App extends React.Component {
  state = {
    route: "Page1",
    component: "",
  };
  onRouteChange = (route) => {
    this.setState({ route });
  };
  render() {
    if (this.state.route === "Page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else {
      const AsyncComponent = asyncComponentWrapper(() =>
        import(`./Components/${this.state.route}.js`)
      );
      return <AsyncComponent onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
