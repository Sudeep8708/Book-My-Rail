import { useState } from "react"
import FormField from "./formfield"

const Booking = () => {
	const profile = [{
		name: "",
		age: 0,
		gender: "",
		preference: ""
	}]
	const [count, setCount] = useState(0)
	const [passenger,setPassengerDetails] = useState(profile)

	const handleChange = (inp) => {
		setPassengerDetails(s => {
			const newArr = s.slice()
			if (inp.target.name === "name"){
				newArr[count].name = inp.target.value
			}
			if (inp.target.name === "age"){
				newArr[count].age = inp.target.value
			}
			if (inp.target.name === "gender"){
				newArr[count].gender = inp.target.value
			}
			if (inp.target.name === "preference"){
				newArr[count].preference = inp.target.value
			}
			return newArr
		})	
	}	

	const addPassenger = () => {
		setCount(count + 1)
		setPassengerDetails(s => [...s,profile])
	}

	const submitChange = (e) => {
		e.preventDefault()
		console.log('Passengers Count: '  + count)
		passenger.forEach(item => {
			console.log(item.name + item.gender + item.age + item.preference);
		});
	}
	
	return (
		/* <FormField	type="text" value={passenger.name} onChange={handlePassenger} /> */
		<div id="passForm">
		<h1>FORM</h1>
		<form onSubmit={submitChange}>
		{
			// console.log(typeof(passenger));
			passenger.map((item,i) => {
				return (
					<div id={i}>
					<FormField label="name" type="text" onChange={handleChange} />
					<FormField label="age" type="number" onChange={handleChange} />
					<FormField label="gender" type="text" onChange={handleChange} />
					<FormField label="preference" type="text"  onChange={handleChange} />
					</div>
				);
			})
		}
		<FormField label="submit" type="submit" value="submit" onChange={submitChange} />
		</form>
		<button onClick={addPassenger} > plus </button>
		</div>
	)
}
export default Booking
