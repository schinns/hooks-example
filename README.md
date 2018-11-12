# Hooks Example
A simple component that keeps track of click counts

## Function Component using useState Hook

``` js
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
```
## Same Component Written with Class

``` js
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

```


## To run:
1. clone repo
2. run `npm i`
3. run `npm start`
4. go to http://localhost:3000
# hooks-example
