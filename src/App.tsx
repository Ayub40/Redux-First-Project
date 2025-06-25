// import { useDispatch, useSelector } from "react-redux"
// import type { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  // const dispatch = useDispatch();
  // const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  // console.log(counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      {/* <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      <button onClick={() => handleIncrement(1)}>Increment</button> */}
      <button onClick={() => dispatch(increment(5))}>Increment by 5</button>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
