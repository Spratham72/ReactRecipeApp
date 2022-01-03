import { Div } from "../styled/detail"
export const Detail=({data})=>{
   console.log(data)
    return <Div>
        <h3>{data.title}</h3>
        <p>{data.instruction}</p>
        <p>{data.ingridient}</p>
        <p>{data.time}</p>
        <img src={data.photo} alt="" />
    </Div>
}