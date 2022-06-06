import "./train_enq.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Page = () => {
    const [train, setTrain] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/trainenq/details", { state: train });
    }

    function changeval(e) {
        setTrain(e.target.value);
    }

    return (
        <div className="usr_pnr">
            <h2 style={{ margin: "10px", padding: "10px" }}>
                Track your Train
            </h2>
            <label style={{ fontWeight: "bold" }}>
                Enter your Train Number:{" "}
            </label>
            <br />
            <input type="text" onChange={changeval} />
            <br />
            <input type="submit" onClick={handleSubmit} value="Submit" />
        </div>
    );
};

export default Page;
