import "./train_enq.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Traincard from "../ticket_view/train_card.js";
const Result = () => {
    const location = useLocation();
    const temp = location.state;
    const [station, setStation] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/trainenq/details", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ temp: temp }),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myjson) {
                setStation(myjson);
            });
    }, []);

    return (
        <>
            <p
                style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "40px",
                }}
            >
                Running Status of Train Number : {temp}
            </p>
            {/* <Traincard
                name={obj.name}
                number={obj.number}
                arrival={obj.arrival}
                departure={obj.departure}
                from={obj.from}
                to={obj.to}
                dateofjourney={obj.dateofjourney}
            /> */}

            <div className="map-container container">
                <div className="value-container header">
                    <p>Arrived Station</p> 
                    <p></p> 
                    <p>Station Name</p>
                    <p>Departure</p>
                </div>

                {station.map((item) => {
                    const [station, code] = String(item.station_name).split(
                        "-"
                    );
                    return (
                        <div className="stations">
                            <div>{code}</div>
                            <div className="route">
                                <div className="line"></div>
                                <div className="circle"></div>
                            </div>
                            <div>{String(station).trim()}</div>
                            <div>{item.arrival}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Result;
