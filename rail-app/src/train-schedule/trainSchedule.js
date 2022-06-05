import TrainDetail from "./train";
import {NavLink,useNavigate,useLocation} from "react-router-dom"
import Plan_your_journey from "../plan-your-journey/plan_your_journey";
import { ReactSession }  from 'react-client-session';
ReactSession.setStoreType("sessionStorage");


const TrainSchedule = () => {
    const username = ReactSession.get("username");
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Received at TrainSchedule(query): ",location.state.query);
    console.log("Received at Train Schedule(location): ",location.state.location);
    const trainDetail = location.state.query;
    const userFetch = location.state.location;
    return (
        <div>
            {/* <Plan_your_journey /> */}
            <div className="container train-container">
                <TrainDetail userFetch={userFetch} trainDetail={trainDetail}/>
            </div>
        </div>
    );
};

export default TrainSchedule;
