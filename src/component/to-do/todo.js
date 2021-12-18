import React from 'react'
import "./style.css";

const Todo = () => {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/image10.jpg" alt="todologo" />
                        <figcaption>ADD YOUR LIST</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Item " className="form-control"></input>
                        <i className="fa fa-plus" />
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" >CHECK LIST </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo;