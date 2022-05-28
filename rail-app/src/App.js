// import './App.css';
import Navbar from "./login-page/navbar"
import FormField from "./login-page/formfield"
import {useState} from 'react';
import addValues from './login-page/middle';
//Test file plan your journey not a part of this page
import Plan_your_journey from './plan-your-journey/plan_your_journey';

function App() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => {
      setName(e.target.value);
        console.log(name);
  }

  const onChangePass = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      'name' : name,
      'password' : password
    }

    addValues(obj).then( ()=>{console.log("The Request made to create was Resolved!")});

    setName("");
    setPassword("");
  }

  return (
    <>
    <Navbar/>
    <Plan_your_journey/>
    <div className="personal-details">
      <p style = {{fontWeight:'bold',fontSize:'20px',margin:'10px'}}>Create Your Account</p>
      <div className="head_card"> 
        <span className="title">Basic Details</span>
        <span className="title">Personal Details</span>
        </div>
        <form onSubmit={handleSubmit}>
        <FormField label='Name' type='text' value={name} onChange={onChangeName} />
        <br/>
        <FormField label='Password' type='password' value={password}  onChange={onChangePass} />
        <br/>
        <button style={{padding:'10px',backgroundColor:'green',color:'white'}} type='submit'>Submit</button>
        </form>
    </div>
    </>
  );
}

export default App;
