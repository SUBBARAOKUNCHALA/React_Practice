import React from "react";

export class MobilePrice extends React.Component {
  state = {
    name: "Vivo T1 5G",
    price: 4000,
    newPrice: ""
  };

  updatePrice = () => {
    this.setState({ price: Number(this.state.newPrice) });
  };

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h2>{this.state.price}</h2>
        <input
          type="number"
          onChange={(e) => this.setState({ newPrice: e.target.value })}
        />
        <button onClick={this.updatePrice}>Update Price</button>
      </>
    );
  }
}
