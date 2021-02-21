import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <List/>
        </div>
      </div>
    );
  }
}
export default App;
