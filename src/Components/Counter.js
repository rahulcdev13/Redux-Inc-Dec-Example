import React from 'react'
import "../App.css"

import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { incNumber, decNumber } from "../Actions/Index";



const Counter = () => {

     const myState = useSelector((state) => state.chnageNumber);
  const dispatch = useDispatch();
  return (
    <>
          <div className=' redux-item text-center mx-auto main'>
          <h1 style={{color:"white"}}>Increment And Decrement Counter</h1>
          <h5 style={{color:"white"}}>Using React ReduX</h5>
          <Button onClick={() => dispatch(decNumber())} variant='danger' title='Decrement'> Decrement </Button> &nbsp;
          <input name='quality' type="text" className='quality_input' value={myState} />
          &nbsp;<Button onClick={() => dispatch(incNumber())} variant='success' title='Increment'> Increment </Button>
        </div> 
        <hr></hr>
    </>
  )
}
export default Counter
