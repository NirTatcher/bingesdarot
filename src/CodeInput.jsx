import React,{useEffect, useState} from 'react'
import fileText from './ss.txt'
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
            <input type="button"  onClick={(e)=>copyFunction(e)} value={buttonValue} />
            <input style={{display:'none'}} id="code_input" type="text" onClick={(e)=>copyFunction(e)} value={userScriptCode}/>
        </div>
    )
}


// ==UserScript==
// @name         SdarotBinge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.sdarot.tv/*
// @grant        none
// ==/UserScript==
/**
 * @author Nir Tatcher <nirto111@gmail.com>
 */

//  (function() {
//     'use strict';



    
//     window.addEventListener('load',function(){
//         const base_url = document.getElementsByClassName('active')[0].baseURI
//         var episode = document.getElementsByClassName('active')[0].baseURI.split("/")[document.getElementsByClassName('active')[0].baseURI.split("/").length-1]
//         var season = document.getElementsByClassName('active')[0].baseURI.split("/")[document.getElementsByClassName('active')[0].baseURI.split("/").length-3]
        

//         document.getElementById('afterLoad').className=""
//         document.getElementById("player").className="background"
   
//         var myVar = window.setInterval( function(){
//             if (document.getElementById('videojs_html5_api') != null && document.getElementById('videojs_html5_api') !== undefined) {
//                 var myObj = document.getElementById('videojs_html5_api')

//                 myObj.play()

               
//                 window.clearInterval(myVar)
//             }
//         },10)
//         var myVar2 = window.setInterval( function(){
//             if ((document.getElementById('videojs_html5_api') != null && document.getElementById('videojs_html5_api') !== undefined) && document.getElementById('videojs_html5_api').ended == true) {

//                 let newUrl = base_url.split("/")
//                 let final = ""
//                 if(document.getElementById('episode').children.length == episode){
//                     episode = 0
//                     season = parseInt(season)+1
//                     alert("SEASON END")
//                     if(document.getElementById('season').children.length == season-1){
//                         alert("SERIES ENDED")
//                         window.clearInterval(myVar2)
//                         window.location.replace("sdart.tv/")
//                     }
//                 }

//                 for(let i=3;i<newUrl.length-1;i++){
//                     if(i==newUrl.length-3){
//                         final += "/" + parseInt(season)
//                     }
//                     else
//                         final+= "/"+ newUrl[i]
//                 }
//                 episode=parseInt(episode)+1
//                 final+= "/"+ episode
//                 console.log(final)
//                 window.clearInterval(myVar2)
//                 window.location.replace(final)
               

//             }
//         },10)
//         },false)


// })();