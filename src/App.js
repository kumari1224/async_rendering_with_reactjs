import React from "react";
import "./App.css";
import Page1 from "./Components/Page1";

class App extends React.Component {
  state = {
    route: "Page1",
    component: "",
  };
  onRouteChange = (route) => {
    // DYNAMIC IMPORT : FEATURE OF ES2020
    // import returns a Promise thus file is fetch Asynchronously
    import(`./Components/${route}.js`)
      .then((module) => {
        this.setState({ component: module.default, route });
      })
      .catch((error) => console.error(error));
  };
  render() {
    if (this.state.route === "Page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
