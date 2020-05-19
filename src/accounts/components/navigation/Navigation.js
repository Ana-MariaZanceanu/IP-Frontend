import React from "react";

import NavigationNotLogged from "./NavigationNotLogged";
import NavigationLogged from "./NavigationLogged";

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0,
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  render() {
    return this.props.logged === true ? (
      <NavigationLogged width={this.state.width} height={this.state.height} />
    ) : (
      <NavigationNotLogged
        width={this.state.width}
        height={this.state.height}
      />
    );
  }
}

export default Navigation;
