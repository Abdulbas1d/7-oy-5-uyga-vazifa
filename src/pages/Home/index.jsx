import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, fiveDecrement, fiveIncrement, increment } from '../../Store/counterSlice'
import './index.css'

function Home() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    function handleIncrement() {
        dispatch(increment(1))
    }

    function handleDecrement() {
        dispatch(decrement(1))
    }

    function handleFiveIncrement() {
        dispatch(fiveIncrement())
    }

    function handleFiveDecrement() {
        dispatch(fiveDecrement())
    }


    return (
        <div className='containerHome'>
            <h3>{counter}</h3>
            <div className="buttons">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleFiveIncrement}>Five Increment</button>
                <button onClick={handleFiveDecrement}>Five Decrement</button>
            </div>
        </div>
    )
}

export default Home
