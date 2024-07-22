import { useState } from "react";
function Main(){
    const name="Harish";
    const [count,setCount]= useState(0);
    function incrementValue(){
      setCount(count+1);
    }

    function decrementValue(){
      setCount(count-1);
    }
    return(
        <main>
           Earn money from {name}
           <br />
           <span>{count}</span>
           <button onClick={()=>incrementValue()}>+</button>
           <button onClick={()=>decrementValue()}>-</button>
        </main>
    );

}

 export default Main;