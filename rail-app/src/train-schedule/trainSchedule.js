import TrainDetail from "./train";
import {NavLink,useNavigate,useLocation} from "react-router-dom"
import { ReactSession }  from 'react-client-session';
ReactSession.setStoreType("sessionStorage");


const TrainSchedule = () => {
    const username = ReactSession.get("username");
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state.query);
    console.log(location.state.location);
    return (
        <div>
            <div className="container train-container">
                <TrainDetail />
            <input type="submit" value="Book now" onClick={()=>{
                navigate('ticketbooking');
            }} />
            </div>
        </div>
    );
};

export default TrainSchedule;
