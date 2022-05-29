import InputWithIcon from "./input";
import ResponsiveDatePickers from "./date_picker";
import SelectTextFields from "./select";
import ContainedButtons from "./button";
import {useState} from 'react';



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
        <div >
            <h1> Plan Your Journey </h1> 
                <InputWithIcon label="from" id="from" onchange={onChangeObj} />
                <InputWithIcon label="to" id="to" onchange={onChangeObj}/>
                <ResponsiveDatePickers onchange={onChangeDate}/>
                <SelectTextFields onchange={onChangeObj}/>
                <ContainedButtons value="Search" onclick={handleSubmit}/>
        </div>
    );
}

export default Plan_your_journey;