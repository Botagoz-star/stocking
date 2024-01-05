import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      filterText: "",
    };
  }

  onFilterTextChange = (value) => {
    this.setState({ filterText: value });
  };

  render() {
    const { products } = this.props;
    const { filterText } = this.state;
    console.log(filterText);
    return (
      <div>
        <SearchBar
          filterText={filterText}
          onFilterTextChange={this.onFilterTextChange}
        />
        <ProductTable />
      </div>
    );
  }
}
