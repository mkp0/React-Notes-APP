import React,{useState} from 'react'

export default function New({a}) {

    let [x,setX] = useState(0)

    let func = () => {
        setInterval(()=>{setX(x+1)},
        500)
    }

    return (
        <div>
            <input type='text' value={a} onChange={func} />
            <h1 style={{textAlign : "center"}}  >{x}</h1>
        </div>
    )
}
