import TrainDetail from "./train";
import {NavLink,useNavigate} from "react-router-dom"



const TrainSchedule = () => {
    const navigate = useNavigate();
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
