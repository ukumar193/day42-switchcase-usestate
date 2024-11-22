import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';

function Stateselector() {
    let nameIputRef =useRef();
    let msglabelRef = useRef();
    let stateSelRef = useRef();
    
    let ageIputRef = useRef();
    let maleRadioButRef =useRef();
    let femaleRadioButRef =useRef();
    let marriRadioRef =useRef();
    let unmarriRadioRef =useRef();
    let maritalStauts;

    let selectedGender ;
    let salutation;
    let newageGroup = useRef();
    let languagesknown ={
     tel:"false",
     hin:"false",
     eng:"false",
     ben:"false",
     tam:"false",
     kan:"false"
    }
    
    let onCreateAccount =()=>{
     console.log(languagesknown);
     

        if (selectedGender ==="male")
         {salutation="Mr."}
        else{ if(maritalStauts ==="single"){
         salutation="Miss."}
         else{salutation="Mrs."}
        }
       
         let name   =nameIputRef.current.value;
       
         let age    =ageIputRef.current.value;
         let state  =stateSelRef.current.value;
     
         msglabelRef.current.innerHTML= `${salutation} ${name}  you're from ${state} 
           ${age} years ${newageGroup}  your account has been created  successfully , you know ${languagesknown.tel ===true?"telugu":""} ${languagesknown.eng ===true?"english":""} ${languagesknown.hin ===true?"hindi":""} ${languagesknown.tam ===true?"tamil":""} ${languagesknown.ben===true?"bengali":""} ${languagesknown.kan ===true?"kannada":""}.  `
       }
    
  return (
    <div> <form>
    <h3>Fill the Details</h3>
    <div>
    <label>Name</label>
    <input ref={nameIputRef}></input>
    </div>
    <div>
    <label>Mobile Number</label>
    <input type="Number"></input>
    </div>
     <div>
    <label>Email</label>
    <input type="email"></input>
    </div>
    <div>
    <label>Password</label>
    <input type="Password"></input>
    </div>
    <div>
    <label>Age</label>
    <input type="NUmber" ref={ageIputRef} onChange={()=>{
      let age = Number(ageIputRef.current.value);
     
      if(age<6)      {newageGroup="baby"}
      else if(age<14){newageGroup="child"}
      else if(age<18){newageGroup="teen"}
      else if(age<28){newageGroup="young"}
      else if(age<50){newageGroup="adult"}
      else if(age>=50){newageGroup="old"};
      console.log(newageGroup)
      console.log(age)
    }}
    ></input>
    </div>
    <div>
    <label>Gender</label>
    <input style={{width:"auto"}} type="radio" name="gender"   ref={maleRadioButRef} onChange={()=>{
        if(maleRadioButRef.current.checked === true) {
             selectedGender ="male"
         }
        
    }}></input>
    <label style={{width:"auto"}}>Male</label>

    <input style={{width:"auto"}} type="radio" name="gender" ref={femaleRadioButRef} onChange={()=>{
    if(femaleRadioButRef.current.checked === true) {
        selectedGender ="female"
    }

  
   }}></input>
    <label style={{width:"auto"}} >Female</label>
    </div>
    <div>
   <label>Marital status</label>
   <input type="radio" name='marr' style={{width:"auto"}}
    ref={unmarriRadioRef} onChange={(eo)=>{
      console.log(eo);
     if (eo.target.checked === true){maritalStauts="single"}
      }}
    ></input>
   <label style={{width:"auto"}}>Unmarried</label>
   <input type="radio" name='marr' style={{width:"auto"}}
   onChange={(e)=>{console.log(e)
    if(e.target.checked===true){maritalStauts="married"}
   }} 
   ></input>
   <label style={{width:"auto"}} ref={marriRadioRef} >Married</label>
    </div>
    <div>
  
  <label>select state</label>
     <select  ref={stateSelRef} onChange={(eo)=>{
          let selectedState = eo.target.value;
          console.log(selectedState);
          if(selectedState ==="Andhra Pradesh" )
          {console.log("Amaravathi")}
         else if(selectedState==="Telangana")
          {console.log("Hyderabad")}
         else if(selectedState==="Kerala")
          {console.log("Thiruvananthapuram")}
         else if(selectedState==="Karnataka")
          {console.log("Bengaluru")}
         else if(selectedState==="Tamil Nadu")
          {console.log("Chennai")}
         else if(selectedState==="Maharashtra")
          {console.log("Mumbai")}
         else if(selectedState==="Gujarat")
          {console.log("Gandhinagar")}
         else if(selectedState==="Madhya Pradesh")
          {console.log("Bhopal")}

      switch (selectedState) {
          case "Telangana":
           console.log("Hyderabad")
               break;
          case "Madhya Pradesh":
           console.log("Bhopal")
               break;
          case "Gujarat":
           console.log("Gandhinagar")
               break;
               case "Maharashtra":
           console.log("Mumbai")
               break;
               case "Tamil Nadu":
           console.log("Chennai")
               break;
               case "Karnataka":
           console.log("Bengaluru")
               break;
               case "Kerala":
           console.log("Thiruvananthapuram")
               break;
               case "Andhra Pradesh":
           console.log("Amaravathi")
               break;

          default:
               break;
         }

     }}>
     <option>Andhra Pradesh</option>
     <option>Karnataka</option>
     <option>Kerala</option>
     <option>Telangana</option>
     <option>Tamil Nadu</option>
     <option>Maharashtra</option>
     <option>Gujarat</option>
     <option>Madhya Pradesh</option>
     </select>
   </div>
   <div>
   <label style={{width:"auto"}}>Languages :</label>
   <input type='checkbox' className='ch1' onChange={(e)=>{
    languagesknown.tel=e.target.checked;
   }}></input>
   <label style={{width:"auto"}}>Telugu</label>
   <input type='checkbox' className='ch1' onChange={(e)=>{
    languagesknown.eng =e.target.checked;
   }}
   ></input>
   <label style={{width:"auto"}}>English</label>
   <input type='checkbox' className='ch1' onChange={(e)=>{
    languagesknown.hin =e.target.checked;
   }}></input>
   <label style={{width:"auto"}} >Hindi</label>
   <input type='checkbox' className='ch1' onChange={(e)=>{
    languagesknown.ben =e.target.checked;
   }}></input>
   <label style={{width:"auto"}}>Bengali</label>
   <input type='checkbox' className='ch1' onChange={(e)=>{
    languagesknown.tam=e.target.checked;
   }}></input>
   <label style={{width:"auto"}}>Tamil</label>
   <input type='checkbox' className='ch1' onChange={(e)=>{
    languagesknown.kan=e.target.checked;
   }}></input>
   <label style={{width:"auto"}}>Kannada</label>
   </div>
  <br></br>
  <button type='button' onClick={()=>{
    onCreateAccount ();
  }}>sign up</button>
  <br></br>
  <p ref={msglabelRef} style={{width:"600px",fontSize:"1rem"}}></p>
  <br></br>
 
  <NavLink to="/" className="nl1">🏏Score Board</NavLink>
   </form>

 </div>
  )
}

export default Stateselector