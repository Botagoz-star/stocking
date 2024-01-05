import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }

  onFilterTextChange = (value) => {
    this.setState({ filterText: value });
  };

  onInStockOnlyChange = (value) => {
    this.setState({ inStockOnly: value });
  };

  render() {
    const { products } = this.props;
    const { filterText, inStockOnly } = this.state;

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onInStockOnlyChange={this.onInStockOnlyChange}
          onFilterTextChange={this.onFilterTextChange}
        />
        <ProductTable />
      </div>
    );
  }
}
