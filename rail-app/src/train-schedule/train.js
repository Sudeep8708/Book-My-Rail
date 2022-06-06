// import {useState} from "react"
export default function Train({ train, userFetch, handleSubmit, changeClass }) {
    // const [userfetch, setfetch] = useState(userFetch);
    return (
        <div className="container">
            <div className="value-container">
                {train.train_no} - {train.train_name}
            </div>
            <div className="to-from">
                <div>
                    {train.from_station} - {train.arrival}
                </div>
                <div>
                    {train.to_station} - {train.departure}
                </div>
            </div>
            <div className="class-container">
                <input
                    type="button"
                    onClick={changeClass}
                    name="FC"
                    value={"First Class: " + String(train.FC_total - train.FC_booked)}
                />
                <input
                    type="button"
                    onClick={changeClass}
                    name="AC"
                    value={"AC: " + String(train.AC_total - train.AC_booked)}
                />
                <input
                    type="button"
                    onClick={changeClass}
                    name="ST"
                    value={"Sitting: " + String(train.ST_total - train.ST_booked)}
                />
                <input
                    type="button"
                    onClick={changeClass}
                    name="SL"
                    value={"Sleeper: " + String(train.SL_total - train.SL_booked)}
                />
            </div>
            <input type="submit" value="Book now" onClick={handleSubmit(train, userFetch)} />
        </div>
    );
}
