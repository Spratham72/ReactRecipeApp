import { useEffect, useRef, useState } from "react"

export const Cards=({elData})=>{
    const ref=useRef();
    const [data,dataState]=useState([]);
    useEffect(() => {
        fetch("http://localhost:3004/recipe")
        .then(response => response.json())
        .then(data => dataState(data))
      },[])
      const sort=()=>{
        fetch("http://localhost:3004/recipe?_sort=time")
        .then(response => response.json())
        .then(data => dataState(data))
      }
      const showDetail=(e)=>{
         const find=e.target.innerHTML;
         fetch(`http://localhost:3004/recipe?q=${find}`)
         .then(response => response.json())
         .then(data => elData(data));
      }
      return (
        <div>
            <button onClick={sort}>Sort With Cooking Time</button>
        {data.map(el=> {return <div onClick={showDetail}>
            <h3>{el.title}</h3>
            <p>{el.time}</p>
        </div>})}
        </div>
      );
    
}