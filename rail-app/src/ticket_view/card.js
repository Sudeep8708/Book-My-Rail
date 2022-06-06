    import './card.css';
    import Traincard from './train_card.js'
    import PassDetails from './pass_details.js'
    import {useLocation,useNavigate} from "react-router-dom";
    import {useState, useEffect} from "react";
    import { ReactSession } from "react-client-session";
    ReactSession.setStoreType("sessionStorage");

    const Card = ()=>{
        const location = useLocation();
        const navigate = useNavigate();
        const username = ReactSession.get("username");
        const trainDetail = location.state.trainDetail;
        const userFetch = location.state.userFetch;
        const [passenger, setpassenger] = useState([]);
        const obj ={"username": username, "date": userFetch.date_picker, "train_no": trainDetail.train_no};
        useEffect(() => {
            fetch("http://localhost:5000/ticket/fetch", {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(obj)
            }).then((response) => {
                return response.json();
            }).then((myjson) => {
                console.log(myjson);
                setpassenger(myjson);
            })
        }, [])
        // console.log(userFetch, trainDetail, passenger);

        // const ticket = {
        //     train_no: "12345",
        //     train_name: "Rockfort Express",
        //     from: "Chennai",
        //     to: "Trichy",
        //     startTime: "10:00",
        //     endTime: "16:00",
        //     passenger: [
        //         {
        //             ticket_no: "4343",
        //             name: "Nitish",
        //             age: 18,
        //             Coach: "D5",
        //             seat: 35,
        //             contact: 7200838025,
        //         },
        //         {
        //             ticket_no: "4345",
        //             name: "Nitish",
        //             age: 18,
        //             Coach: "D5",
        //             seat: 35,
        //             contact: 7200838025,
        //         },
        //         {
        //             ticket_no: "4347",
        //             name: "Nitish",
        //             age: 18,
        //             Coach: "D5",
        //             seat: 35,
        //             contact: 7200838025,
        //         },
        //     ],
        // };
        return(
            <>
            <div className = "card">
                <p style={{color:'green',textAlign:'center',fontSize:'22px'}}>YOUR BOOKING IS COMPLETE !</p>
                <p style = {{textAlign:'center'}}>Happy Journey ! </p>
                <Traincard arrival={trainDetail.arrival} departure={trainDetail.departure} dateofjourney={userFetch.date_picker} from ={trainDetail.from_station} to={trainDetail.to_station}/>
                <p style = {{fontSize:'22px'}}>PASSENGER:</p>
                {
                    passenger.map((item) => {
                        return <PassDetails pass={item}/>
                    })
                }
            </div>
            <div style={{display:'flex',justifyContent:'space-around',padding:'20px'}}>
            <button style = {{backgroundColor:'black',color:'white',fontWeight:'bold',padding:'10px',width:'100px'}}>EXIT</button>
            <button style = {{backgroundColor:'green',color:'white',fontWeight:'bold',padding:'10px',width:'100px'}}>PRINT</button>           
            </div>
            <div className="footer"></div>
            </>
        )
    }

    export default Card;
