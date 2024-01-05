import React, { Component } from "react";

export default class ProductRow extends Component {
  render() {
    const { id, name, price, stocked } = this.props;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{price}</td>
        <td>{stocked ? "YES" : "NO"}</td>
      </tr>
    );
  }
}
