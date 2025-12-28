import React from "react";

export class PropsWithClass extends React.Component {
  render() {
    return <h2>{this.props.name}</h2>;
  }
}
