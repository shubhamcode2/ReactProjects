import React, { useState } from 'react'
import Box from './Box'


function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);

    const handleClick = (index) => {
        const copyState = [...state];

        if (copyState[index] === null) {
            copyState[index] = isX ? 'X' : '0';
            setState(copyState);
            setIsX(!isX);
        } else {
            console.log("Bakchodi mat karo yrr");
        }
    }

    const checkWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winner.length; i++) {
            const [a, b, c] = winner[i];
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    return (
        <div className='board'>
            <div className="boardRow">
                <Box onClick={() => handleClick(0)} value={state[0]} />
                <Box onClick={() => handleClick(1)} value={state[1]} />
                <Box onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="boardRow">
                <Box onClick={() => handleClick(3)} value={state[3]} />
                <Box onClick={() => handleClick(4)} value={state[4]} />
                <Box onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="boardRow">
                <Box onClick={() => handleClick(6)} value={state[6]} />
                <Box onClick={() => handleClick(7)} value={state[7]} />
                <Box onClick={() => handleClick(8)} value={state[8]} />
            </div>
            <br />
            <br />
            <div>{isWinner ? "Player " + isWinner + " won"  : ""}</div>
        </div>
    )
}

export default Board