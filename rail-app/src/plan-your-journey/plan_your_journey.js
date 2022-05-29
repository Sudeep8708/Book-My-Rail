import InputWithIcon from "./input";
import ResponsiveDatePickers from "./date_picker";
import SelectTextFields from "./select";
import ContainedButtons from "./button";
import {useState} from 'react';


import "./plan.css"

const Plan_your_journey = () => {
    const [obj, setObj] = useState({
        from: '',
        to: '',
        date_picker: '',
        select: '',
    });
    
    const onChangeObj = (e) => {
        setObj({...obj, [e.target.name]: e.target.value});
    }
    
    const onChangeDate = (o) => {
        setObj({...obj, [o.name]: o.value});
    }

    const handleSubmit = (e) => {
        console.log(obj)
        fetch('http://localhost:5000/authenticate', { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST', body: JSON.stringify(obj)
        }).then(function(response){
            return response.json();
        });
    }
    return ( 
        <div className="form-container" >
            <h1> Plan Your Journey </h1> 
            <div className="city">
            <InputWithIcon label="from" id="form" onchange={onChangeObj}/>
            </div>
            <div className="city">
            <InputWithIcon label="to" id="to" onchange={onChangeObj}/>
            </div>
            <div>
            <ResponsiveDatePickers onchange={onChangeDate}/>
            </div>
            <SelectTextFields onchange={onChangeObj}/>
            <ContainedButtons value="Search" onclick={onChangeObj}/>
        </div>
    );
}

export default Plan_your_journey;
