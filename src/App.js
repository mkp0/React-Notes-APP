import React,{useState} from 'react'

export default function App() {

  let [title,setTitle] = useState("")
  let [value,setValue] = useState("")
  let [arr,setArr] = useState([])

  let func = () => {
    arr.push([title,value])
    setTitle("")
    setValue("")
  }

  
  return (
    <div>
      <h1 className="card-panel  red lighten-4 " style={{margin:"0 0 1rem 0"}} >Hello World   </h1>

      <div>
        <input value={title} type='text' style={{margin:"auto",display:"block",width:"15rem",textAlign:"center",overflow:"hidden"}} className='red lighten-3' placeholder="EnterTitle" onChange={(e)=>{setTitle(e.target.value)}  } />
        <textarea placeholder="Enter Content" value={value} className='materialize-textarea red lighten-3' style={{margin:"auto",display:"block",width:"15rem",textAlign:"center",overflow:"hidden",height:"10rem"}}  onChange={(e)=>{setValue(e.target.value)} } />
        <button className="btn" onClick={func}  style={{margin:"auto",display:"block",width : "15rem"}} >ADD</button>
      </div>

    <div className="row">
      {arr.map((a,b)=>{
        return (<div className="col s3">
          <div style={{margin:"2rem 2rem 0 2rem",padding:"1rem 0",display:"block",width:"15rem",textAlign:"center",overflow:"hidden"}} className='deep-purple lighten-2'>{a[0]}</div>
          <div style={{margin:"0rem 2rem 2rem 2rem",padding:"1rem 0",display:"block",width:"15rem",textAlign:"center",overflow:"hidden" ,minHeight:"10rem" }} className='purple lighten-3'>{a[1]}</div>
        </div>)
      })}
    </div>

    </div>
    
  )
}
