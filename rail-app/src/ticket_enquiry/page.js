import './train_enq.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Page = ()=>{
    const [tick,setTick]=useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate('/trainenq/details',{state:tick});
    }

    function changeval(e){
            setTick(e.target.value);
    }

    return(

        <div className = "usr_pnr">
         <h2 style = {{margin:'10px',padding:'10px'}}>Ticket Enquiry</h2>  

         <label style = {{fontWeight:'bold'}}>Enter your Train Number: </label>
         <br/>
         <input type = "text" onChange = {changeval}/><br/>
         <input type = "submit" onClick = {handleSubmit} value = "Submit"/>
        </div>
    )
}

export default Page;