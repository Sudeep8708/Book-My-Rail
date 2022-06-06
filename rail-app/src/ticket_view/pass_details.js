import "./card.css";

const pass_details = ({pass}) => {
    // console.log(pass);
    return (
        <div className="ticket_details">
            <div>
                <p>{pass.ticket_no}</p>
                <p>{pass.profile_name}</p>
                <p>{pass.age}</p>
                <p>{pass.gender}</p>
                <p>{pass.train_no}</p>
                <p>{pass.coach_no}</p>
                <p>{pass.seat_no}</p>
                <p>{pass.from_station}</p>
                <p>{pass.to_station}</p>
                <p>{pass.fare}</p>
            </div>
        </div>
    );
};

export default pass_details;
