import {useState} from "react";
const Result_fetch = () => {
	const [result, setResult] = useState([{}]);
	const fetch_func = async () => {
		fetch("http://localhost:5000/planYourJourney/stationName", {
				headers: {
					Accept: "application/json",
					"Content-type": "application/json",
				},
				method: "POST",
			}).then(function(response) {
				return response.json();
			}).then(function(myjson){
				setResult(myjson);
			})
	}
	fetch_func();
	return result;
}

const StationSelect = (props) => {
	const result = Result_fetch()
	return (
		<>
		<label>{props.name}</label>
		<input name={props.name} list={props.name}/>
		<datalist id={props.name}>
			{
				 result.map((item) => {
					return <option key={item.station_name} value={item.station_name}	/> 
				 })
			}
		</datalist>
		</>
	)
}

export default StationSelect
