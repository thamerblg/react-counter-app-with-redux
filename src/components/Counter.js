import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../actions/counterAction";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Basic React &amp; Redux Counter</h1>
      <p>{counter}</p>
      <div className="btns">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
