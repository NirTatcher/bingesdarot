import React,{useEffect, useState} from 'react'
import fileText from './script.txt'
import Button from '@material-ui/core/Button';
export default function CodeInput() {
    const [userScriptCode,setScript] = useState("")
    const [buttonValue,setButtonValue] = useState("Click To Copy")
    useEffect(() => {
 fetch(fileText).then(r=>r.text()).then(text=>setScript(text))
     
     
      
       
    }, [])
    const copyFunction=(event)=>{
        console.log(event.target.value)
        navigator.clipboard.writeText(userScriptCode)
        setButtonValue("Copied!")
      }
    return (
        <div>
            <label htmlFor="code_input">copy this!</label>
            <br/>
            <Button variant="contained"
                color="primary" onClick={(e)=>copyFunction(e)} >{buttonValue}</Button>
//             <input type="button"  onClick={(e)=>copyFunction(e)} value={buttonValue} />
//             <input style={{display:'none'}} id="code_input" type="text" onClick={(e)=>copyFunction(e)} value={userScriptCode}/>
        </div>
    )
}
