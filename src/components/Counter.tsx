"use client";
import {
  decrementValue,
  incrementValue,
} from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

function Counter() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="mx-auto">
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-2.5">
        Total: {value}
      </h1>
      <div className="flex items-center gap-10 text-lg sm:text-xl">
        <button
          onClick={() => dispatch(decrementValue(null))}
          className="bg-emerald-700 hover:bg-emerald-600 transition-colors ease-in px-4 py-2 inline-block"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementValue(null))}
          className="bg-rose-700 hover:bg-rose-600 transition-colors ease-in px-4 py-2 inline-block"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
