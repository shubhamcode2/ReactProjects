import React, { useState } from 'react';

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [todo, setTodo] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter a todo"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => {
            setTodoArray([...todoArray, todo]);
          }}
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <div className="mt-4 w-full max-w-md bg-slate-600 p-2 rounded-md">
        {todoArray.map((key, i) => (
          <h1
            key={i}
            className="text-lg p-2 bg-blue-200 border-b m-2 border-gray-200 rounded-md relative"
          >
            {key}
            <button
              key={i}
              onClick={() => setTodoArray(todoArray.filter((key, index) => index !== i))}
              className='bg-red-500 text-white px-2 py-1 rounded absolute right-2'
            >
              Del
            </button>
            <button
              className='bg-blue-500 text-white px-2 py-1 rounded absolute right-20'
              onClick={() => {
                
              }}
            >
              Edit
            </button>
          </h1>

        ))}
      </div>
    </div>
  );
}

export default App;
