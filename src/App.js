import React, { lazy, Suspense } from "react";
import "./App.css";
import Page1 from "./Components/Page1";
import Loader from "./Components/Loader";

const Page2Lazy = lazy(() => import("./Components/Page2.js"));
const Page3Lazy = lazy(() => import("./Components/Page3.js"));

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
    } else if (this.state.route === "Page2") {
      return (
        <Suspense fallback={<Loader />}>
          <Page2Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<Loader />}>
          <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
  }
}

export default App;
