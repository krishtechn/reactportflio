import React, { useState } from 'react'
import { ref,set,getDatabase,createUserWithEmailAndPassword,auth } from '../firebaseconfig';
import { connectDatabaseEmulator } from 'firebase/database';

const Signup = () => {

  let [userdata,setuserdata] = useState({
    name:"",
    email:"",
    password:"",
    address:"",
    mobilenumber:"",
    gender:"",
  });

  const FormValidation = (e)=>{
    e.preventDefault();
    if(userdata.name == "" || userdata.email == "" || userdata.password==""|| userdata.address==""|| userdata.mobilenumber == ""|| userdata.gender == ""){
      alert("please enter all the details");
    }else{
      let rand = Math.ceil(Math.random()*2000);
      writeUserData(rand,userdata.name,userdata.email,userdata.password,userdata.address,userdata.mobilenumber,userdata.gender);
      alert("you are successfully signup")
      // window.location.href="/SearchCourse";    
      setuserdata({
        name:"",
        email:"",
        password:"",
        address:"",
        mobilenumber:"",
        gender:"",
      });
    }
  }

  function signupwithemailpassword(email,password){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
  }


  function writeUserData(userId, name, email, password,address,mobilenumber,gender) {
    const db = getDatabase();
    let id = parseInt(mobilenumber);
    set(ref(db, 'users/' + id), {
      username: name,
      email: email,
      password : password,
      address: address,
      mobilenumber:mobilenumber,
      gender : gender,
    });
    signupwithemailpassword(email,password);
  }
  return (
    <div className='w-full flex justify-center items-center'>
    <form className='w-full my-4 px-9 md:w-[700px]' onSubmit={(e)=>FormValidation(e)}>
     <h1 className='text-3xl font-bold text-white'>Field your all details</h1>
     <p className='text-[#A3B3BC] text-[16px]'>if you successfully register with valid account you can access all the course related to the coding.</p>
      <div className='flex flex-col'>
       <input type='text' className='mr-2 my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Name' value={userdata.name} onChange={(e)=>setuserdata({name:e.target.value,email:userdata.email,password:userdata.password,address:userdata.address,mobilenumber:userdata.mobilenumber,gender:userdata.gender})}/>
       <div className='flex w-full'>
       <input type='email' className='mr-2 w-full my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Email' value={userdata.email} onChange={(e)=>setuserdata({name:userdata.name,email:e.target.value,password:userdata.password,address:userdata.address,mobilenumber:userdata.mobilenumber,gender:userdata.gender})}/>
       <input type='password' className='mr-2 w-full my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Password' value={userdata.password} onChange={(e)=>setuserdata({name:userdata.name,email:userdata.email,password:e.target.value,address:userdata.address,mobilenumber:userdata.mobilenumber,gender:userdata.gender})}/>
       </div>
       <div className='flex w-full'>
       <input type='address' className='mr-2 my-3 py-3 px-5 w-full text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Address' value={userdata.address} onChange={(e)=>setuserdata({name:userdata.name,email:userdata.email,password:userdata.password,address:e.target.value,mobilenumber:userdata.mobilenumber,gender:userdata.gender})}/>
       <input type='number' className='mr-2 my-3 py-3 px-5 w-full text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Mobile Number' value={userdata.mobilenumber} onChange={(e)=>setuserdata({name:userdata.name,email:userdata.email,password:userdata.password,address:userdata.address,mobilenumber:e.target.value,gender:e.target.value})}/>
       </div>
       <select className='mr-2 my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg'>
       <option>Please Select your Gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
       </select>
       <button className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-3 px-9 rounded-full my-4 text-white text-[16px]' target='_blank' href='https://github.com/krishtechn'>Signup Now</button>
      </div>
    </form>
    </div>
  )
}

export default Signup