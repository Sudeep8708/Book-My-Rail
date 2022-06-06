import { useState,useEffect } from "react";
import { ReactSession } from "react-client-session";
ReactSession.setStoreType("sessionStorage");

export default function TravelHistory() {
    const username = ReactSession.get("username");
    const [history,setHistory] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/dashboard/travel-history", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({username: username}),
        }).then(function (response) {
            return response.json();
        }).then (function (myjson){
            setHistory(myjson);
        })
    }, []);
    console.log(history);
    return (
        <div className="container history-container">
			<h1>Travel History</h1>
            {history.map((travel) => {
                return (
                    <div key={travel.ticket_no} className="container">
                        <div className="t_no">{travel.ticket_no}</div>
                        <div>{travel.from_station}</div>
                        <div>{travel.to_station}</div>
                        <div>{travel.count}</div>
                        <div>{travel.price}</div>
                    </div>
                );
            })}
        </div>
    );
}
