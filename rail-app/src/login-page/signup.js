import "./login.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavLink } from "react-router-dom"
import Navbar from "../navbar/nav-bar";
import FormField from "./formfield";
import { useState } from "react";
import addValues from "./middle";
//Test file plan your journey not a part of this page

const BasicDetails = (acc) => {
    const account = acc.account;
    return (
        <form className="form-entry">
            <FormField
                label="name"
                type="text"
                onChange={acc.onChangeAccount}
            />
            <FormField
                label="email"
                type="email"
                onChange={acc.onChangeAccount}
            />
            <br />
            <FormField
                label="password"
                type="password"
                onChange={acc.onChangeAccount}
            />
            <br />
            <div>
            <NavLink to="/personal" className="title">
                <input
                    type="button"
                    value="Continue"
                />
                </NavLink>
            </div>
        </form>
    );
};


const PersonalDetails = (acc) => {
  const account = acc.account;
  return (
      <form className="form-entry">
          <FormField
              label="address"
              type="text"
              onChange={acc.onChangeAccount}
          />
          <FormField
              label="age"
              type="number"
              onChange={acc.onChangeAccount}
          />
          <br />
          <FormField
              label="gender"
              type="text"
              onChange={acc.onChangeAccount}
          />
          <br />
          <FormField
                  label="proof"
                  type="text"
                  onClick={acc.onChangeAccount}
          />
          <div>
                <input
                    type="submit"
                    value="Submit"
                    onClick={acc.handleSubmit}
                />
          </div>
      </form>
  );
};

function App() {
    const [account, setAccount] = useState({
        name: "",
        email: "",
        password: "",
        age: 0,
        address: "",
        contact: "",
        proof: "",
    });

    const onChangeAccount = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(account);
    };

    return (
        <>
        <BrowserRouter>
            <Navbar />
            <div className="personal-details">
                <p>Create Your Account</p>
                <div className="head_card">
                    <NavLink to="/" className="title">Basic Details</NavLink>
                    <NavLink to="/personal" className="title">Personal Details</NavLink>
                </div>
                
                <Routes>
                <Route path="/" element={<BasicDetails
                    account={account}
                    onChangeAccount={onChangeAccount}
                    handleSubmit={handleSubmit}
                />}
                />
                <Route path="/personal" element={<PersonalDetails
                    account={account}
                    onChangeAccount={onChangeAccount}
                    handleSubmit={handleSubmit}
                />}
                />
                </Routes>
                
            </div>
            </BrowserRouter>            
        </>
        
    );
}

export default App;
