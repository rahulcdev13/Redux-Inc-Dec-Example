import React from 'react'
import "./Todo.css";

const Todo = () => {
  return (
    <>
        <div className='main-div'>
          <div className='child-div'>
            <figure>
              <figcaption>Add Your list Here</figcaption>
            </figure>
            <div className='addItems'>
              <input type="text" placeholder=' ✍ Add Items..' />
              <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div> 
        </div>
    </>
  )
}

export default Todo
