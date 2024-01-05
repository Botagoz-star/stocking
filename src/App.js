import React, { Component } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  fetchData = async () => {
    const url = "https://65971ae8668d248edf229713.mockapi.io/api/v1/produce";

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      this.setState({ products: data });
    } catch (error) {
      console.log(error);
    } finally {
      // console.log("finally block");
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {}

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <FilterableProductTable products={products} />
      </div>
    );
  }
}
