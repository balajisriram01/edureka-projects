import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Counter from "./components";

class Application extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        Time
        <Counter count={this.state.count} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
