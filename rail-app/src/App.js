import './App.css';
import Navbar from "./navbar"
import FormField from "./formfield"
import {useState} from 'react';
import addValues from './middle';

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
