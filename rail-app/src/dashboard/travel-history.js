export default function TravelHistory({ history }) {
    console.log(history);
    return (
        <div className="container history-container">
			<h1>Travel History</h1>
            {history.map((travel) => {
                return (
                    <div key={travel.ticket_no} className="container">
                        <div className="t_no">{travel.ticket_no}</div>
                        <div>{travel.from}</div>
                        <div>{travel.to}</div>
                        <div>{travel.Date}</div>
                    </div>
                );
            })}
        </div>
    );
}
