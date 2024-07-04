import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, inc5 } from "./redux/Slice";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Deepak</h1>
      <h2>Counter: {useSelector((state) => state.counterSlice.counter)}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(inc5(5))}>Inc5</button>
    </div>
  );
}

export default App;
