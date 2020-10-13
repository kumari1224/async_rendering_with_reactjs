import React from "react";
import Loader from "./Loader";

function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    state = {
      component: "",
    };

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }

    render() {
      const { component } = this.state;
      return component ? (
        <this.state.component {...this.props} />
      ) : (
        <Loader componentName={this.props.route} />
      );
    }
  }

  return AsyncComponent;
}

export default asyncComponent;
