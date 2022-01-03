import { useRef, useState } from "react";

export const Input=()=>{
    const ref=useRef(null);
    const[formInput, formState]=useState("");
    const changeHandler=(e)=>{
        if(e.target.id==="photo"){
            
            const files=ref.current.files;
            const img=new FileReader();
            img.readAsDataURL(files[0]);
            img.onload=(e)=>{
                formState({
                    ...formInput,
                    "photo":e.target.result
                    
                })
            }
            
        }
        else{
            formState({
                ...formInput,
                [e.target.id]:e.target.value,
            })
        }
    }
    const getData=async()=>{
        try{
        let res= await fetch("http://localhost:3004/recipe",{
            method:"POST",
            body:JSON.stringify(formInput),
            headers:{
                "Content-Type":"application/json"
            }
        });
    }catch(er){
        console.log(er)
    }
        
    }
    return <>
        <input type="text" name="title" id="title" onChange={changeHandler} placeholder="TITLE"/>
        <input type="text" name="ingridient" id="ingridient" onChange={changeHandler} placeholder="INGRIDIENTS" />
        <input type="text" name="time" id="time" onChange={changeHandler}placeholder="TIME"/>
        <input type="text" name="instruction" id="instruction" onChange={changeHandler}placeholder="INSTRUCTIONS"/>
        <input ref={ref} type="file" name="image" id="photo" onChange={changeHandler} />
        <button onClick={getData}>SUBMIT</button>
    </>
}