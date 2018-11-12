import React, { useState, Component } from 'react';

// class component
class Comp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }
  render() {
    return (
      <div>
        <h1>Counter 1</h1>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>add</button>
      </div>
    );
  }
}

// function component using hooks
function Comp2() {
  // state variable called count
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter 2</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
};

function App() {
  return (
    <div>
      <Comp1 />
      <Comp2 />
    </div>
  )
}

export default App;
