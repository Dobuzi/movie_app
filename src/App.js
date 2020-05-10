import React from 'react';
// import Proptypes from 'prop-types'

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1}))
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidUpdate() {
    console.log("component did update")
  }

  componentDidMount() {
    console.log("component did mount");
  };

  componentWillUnmount() {
    console.log("component will unmount")
  }

  
  render() {
    console.log("I'm rendering")
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  };
};

export default App;
