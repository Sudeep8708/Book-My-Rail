import TrainDetail from "./train";
import {NavLink,useNavigate,useLocation} from "react-router-dom"
import { ReactSession }  from 'react-client-session';
ReactSession.setStoreType("sessionStorage");


const TrainSchedule = () => {
    const username = ReactSession.get("username");
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Received at TrainSchedule(query): ",location.state.query);
    console.log("Received at Train Schedule(location): ",location.state.location);
    const train_det = location.state.query;
    return (
        <div>
            <div className="container train-container">
                <TrainDetail train_det={train_det}/>
            <input type="submit" value="Book now" onClick={()=>{
                navigate('ticketbooking');
            }} />
            </div>
        </div>
    );
};

export default TrainSchedule;
