import React from 'react'
import { useState } from 'react'
function Input(props) {
    const [todo, setTodo] = useState('')
    const handelClick = () => {
         props.todoArray = [];
        todoArray.push(todo);
    }
    return (
        <div>

            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder='Add Task'
                className='p-3 m-3 outline-none border-none text-black rounded w-96'
            />
            <button
                onClick={handelClick}
                type="submit"
                className='p-3 m-3 bg-green-600 rounded hover:bg-green-400'
            >
                Add
            </button>


        </div>
    )
}

export default Input