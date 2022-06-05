import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";
import Train from "./train";
ReactSession.setStoreType("sessionStorage");

const TrainDetail = (props) => {
    const trainDetail = props.trainDetail;
    const userFetch = props.userFetch;
    const navigate = useNavigate();
    const username = ReactSession.get("username");
    console.log(userFetch.from);
    // console.log("The Train Details to be displayed: ",props.train_det);
    const handleSubmit = () => {
        if (username) {
            navigate("/booking");
        } else {
            alert("Login first");
            navigate("/login");
        }
    };
    return (
        <>
            {trainDetail.map((train) => (
               <Train key={train.train_no} train={train} handleSubmit={handleSubmit}/>
            ))}
        </>
    );
};

export default TrainDetail;
