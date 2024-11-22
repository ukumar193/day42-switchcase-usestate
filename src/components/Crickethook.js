import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Crickethook() {
     let [score,setscore] =useState(0);
     let [balls,setballs] =useState(0);
     let [double,setbouble]=useState(0);
     let [three,setThree]=useState(0);
     let [four,setfour]=useState(0);
     let [six,setsix]=useState(0);
     let [wicket,setwicket]=useState(0);
     let [noball,setnoball]=useState(0);
     let [wide,setwide]=useState(0);
     
  return (
    <div className='di1'>
     <div>
          <h1>Criket Score</h1>
     <p>Runs :{score} /{wicket}</p>
     <p>Overs :{parseInt(balls/6)}.{balls%6} </p>
     <p>Balls:{balls}</p>
     <p>doubles :{double}</p>
     <p>threes:{three}</p>
     <p>Fours:{four}</p>
     <p>Sixers:{six}</p>
     <p>Wickets:{wicket}</p>
     <p>Noballs:{noball}</p>
     <p>Wide:{wide}</p>
      <br></br>
 
     <button onClick={()=>{
       setscore(score +1);
       setballs(balls +1);
      }}>Single</button>
     
     <button onClick={()=>{
        setscore(score+2);
        setballs(balls+1);
        setbouble(double+1);
      }}>Double</button>

     <button onClick={()=>{
          setscore(score+3);
          setballs(balls+1);
          setThree(three+1);
        }}>three</button>

     <button onClick={()=>{
          setscore(score+4);
          setballs(balls+1);
          setfour(four+1);
      }}>Four</button>
     <button onClick={()=>{
           setscore(score+6);
           setballs(balls+1);
           setsix(six+1);
     }}>six</button>
     <button onClick={()=>{
          setballs(balls+1);
          setwicket(wicket+1);
     }}>Wicket</button>
     <button onClick={()=>{
          setscore(score+1);
          setnoball(noball+1);
     }}>Noball</button>

     <button onClick={()=>{
          setscore(score+1);
          setwide(wide+1);
     }}>Wide</button>
     <div>
     <NavLink to="/login" className="nl1">📃Log in➡️</NavLink>
     </div>
     </div>
     
    </div>
  )
}

export default Crickethook