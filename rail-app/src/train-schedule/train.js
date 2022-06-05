export default function Train({ train, handleSubmit }) {
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
                <button>First Class: {train.FC_total - train.FC_booked}</button>
                <button>AC Class: {train.AC_total - train.AC_booked}</button>
                <button>Sitting: {train.ST_total - train.ST_booked}</button>
                <button>Sleeper: {train.SL_total - train.SL_booked}</button>
            </div>
            <input type="submit" value="Book now" onClick={handleSubmit} />
        </div>
    );
}
