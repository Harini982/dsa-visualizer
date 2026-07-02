"use client";

import { useState } from "react";

export default function ArraysPage() {
  const [array, setArray] = useState([10, 25, 50]);
  const [number, setNumber] = useState("");
  const [foundIndex, setFoundIndex] = useState(-1);

  function insertNumber() {
    if (number === "") return;

    setArray([...array, Number(number)]);
    setNumber("");
    setFoundIndex(-1);
  }

  function deleteNumber() {
    if (number === "") return;

    const updatedArray = array.filter(
      (value) => value !== Number(number)
    );

    setArray(updatedArray);
    setNumber("");
    setFoundIndex(-1);
  }

  function searchNumber() {
    if (number === "") return;

    const index = array.findIndex(
      (value) => value === Number(number)
    );

    setFoundIndex(index);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Array Visualizer
      </h1>

      <div className="mt-10 flex justify-center">
        <input
          type="number"
          placeholder="Enter Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="rounded-lg border border-gray-400 px-4 py-2"
        />
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={insertNumber}
          className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Insert
        </button>

        <button
          onClick={deleteNumber}
          className="rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700"
        >
          Delete
        </button>

        <button
          onClick={searchNumber}
          className="rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700"
        >
          Search
        </button>
      </div>

      <h2 className="mt-10 text-center text-2xl font-bold">
        Current Array
      </h2>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        {array.map((value, index) => (
          <div
            key={index}
            className={`flex h-16 w-16 items-center justify-center rounded-lg text-xl font-bold text-white ${
              index === foundIndex
                ? "bg-green-600"
                : "bg-blue-500"
            }`}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}