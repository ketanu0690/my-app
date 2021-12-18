import React from "react";

import Resturant from "./component/basics/Resturant";
import  UseState  from "./component/hooks/useState.js";
// import UseEffect from "./component/hooks/useEffect";
// import UseReducer from "./component/hooks/useReducer";
import Todo  from "./component/to-do/todo.js";
const App = () => {
  return (
    <>

    
{/* <UseEffect></UseEffect>
<UseReducer></UseReducer> */}
<UseState></UseState>
    <Todo/>
    <Resturant/>
        </>
  ) ;
};

//how we look 
// const App = () => {
//   return (
//     <> 
//     <returent />   
//     {/* <MyApp/> 
//     <h1 className="heading" onClick="myname()">
//     welcome to ketan's website 
//     </h1>
//     <img src="" alt=""></img> */}
//     </>
    
//   )
// }
//we are calling the functional component
// creating a new  functional component in react
// const MyApp = () => {
//   return <h1> ketan upadhyay</h1>
// }
// how react look our code 
// const sum = ()=>{
// return React.createElement('h1',{},"hello world");
// }

export default App
