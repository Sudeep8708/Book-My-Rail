import { ReactSession } from "react-client-session";
import {useNavigate} from "react-router-dom"
ReactSession.setStoreType("sessionStorage");

const TrainDetail = (props) => {
    const trainDetail = props.trainDetail;
    const userFetch = props.userFetch;
    const navigate = useNavigate();
    const username = ReactSession.get("username");
    console.log(userFetch.from);
    // console.log("The Train Details to be displayed: ",props.train_det);
    const handleSubmit = () => {
        if(username) {
            navigate('/booking', {state: props})
        } else {
            alert("Login first");
            navigate('/login')
        }
    }
    return (   
        <> 
        {   
        trainDetail.map ( (train) => 
        <div className ="container">
        <div className="value-container">{train.train_no} - {train.train_name}</div>
            <div className="to-from">
                <div>{train.from_station} - {train.arrival}</div>
                <div>{train.to_station} - {train.departure}</div>
            </div>
              <div className="class-container">
                    {
                        trainDetail.map((item) => {
                            return (
                                <>
                                <div>
                                    First Class: {item.FC_total-item.FC_booked}
                                </div>
                                <div>
                                AC Class: {item.AC_total-item.AC_booked}
                                </div>
                                <div>
                                Sitting: {item.ST_total-item.ST_booked}
                                </div>
                                <div>
                                Sleeper: {item.SL_total-item.SL_booked}
                                </div>
                                </>
                            )
                        })
                    }
            </div>  
            <input type="submit" value="Book now" onClick={handleSubmit} />
        </div>
        )
        }
        </>
    )
}

export default TrainDetail
