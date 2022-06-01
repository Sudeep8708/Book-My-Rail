import "./login.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/nav-bar";
import { useState } from "react";
import BasicDetails from "./basic-details";
import PersonalDetails from "./personal-details";

function App() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        name: "",
        email: "",
        password: "",
        age: 0,
        address: "",
        contact: "",
        proof: "",
    });
    const [count_pass, setCount] = useState(0);
    const onChangeAccount = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        const getData = () => {
            fetch('http://localhost:5000/usercheck', { 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST', body: JSON.stringify(account)
            }).then(function(response){
                setCount(response.json());
            })
        }
        getData();
        if(count_pass === 0) {
            navigate('/signup/personal');
        } else {
            alert("Username already in use");
        }   
        if(account["age"] < 18){
            alert("User has to be an adult");
        }
        // for(const i in account){
        //     if(account[i] === "")
        // }
        fetch('http://localhost:5000/signup', { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST', body: JSON.stringify(account)
        }).then(function(response){
            console.log(response.json());
        });
    };

    return (
        <BrowserRouter>
            <Navbar />
            <div className="personal-details">
                <p>Create Your Account</p>
                <div className="head_card">
                    <NavLink to="/basic" className="title">Basic Details</NavLink>
                    <NavLink to="/personal" className="title">Personal Details</NavLink>
                </div>
                <Routes>
                <Route path="/basic" element={<BasicDetails
                    account={account}
                    onChangeAccount={onChangeAccount}
                    handleSubmit={userCheck}
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
        
    );
}

export default App;
