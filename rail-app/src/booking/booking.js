import { useState } from "react"
import "./bookPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
		<p>Passenger details</p>
		<form onSubmit={submitChange}>
		{
			// console.log(typeof(passenger));
			passenger.map((item,i) => {
				return (
					<div id={i}>
					<input name="name" type="text" placeholder="name" onChange={handleChange} />
					<input name="age" placeholder="age" type="number" onChange={handleChange} />
					<select name="gender" placeholder="Gender" onChange={handleChange}>
						<option>Gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Others">Others</option>
					</select>
					<select name="preference" onChange={handleChange}>
						<option value="Null">no preference</option>
						<option value="Window">Window</option>
					</select>
					</div>
				);
			})
		}
		<div class="linker" onClick={addPassenger}>
		<FontAwesomeIcon icon={faPlus} size="l" /> Add a passenger
		</div>
		<input type="submit" value="Continue" onChange={submitChange} />
		</form>
		</div>
	)
}
export default Booking
