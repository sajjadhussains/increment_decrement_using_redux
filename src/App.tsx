import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-500 p-8 gap-4 items-center">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-400 rounded p-2 text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="bg-green-400 rounded p-2 text-white"
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-400 rounded p-2 text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
