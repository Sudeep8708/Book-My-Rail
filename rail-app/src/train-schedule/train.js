import { useLocation } from "react-router-dom"


const TrainDetail = () => {
    const location = useLocation();
    const train = {
        id: "12345",
        name: "Vaigai",
        from: "Chennai-Egmore",
        arrivalTime: "10:00",
        to: "Thiruchirapalli",
        reachTime: "18:00",
        class: ["Sitting", "Sleeper", "AC-Sleeper", "AC", "First"]
    }
    return (
        <div>
        <div className="value-container">{train.id} - {train.name}</div>
            <div className="to-from">
                <div>{train.from} {train.arrivalTime}</div>
                <div>{train.to} {train.reachTime}</div>
            </div>
            <div className="class-container">
                    {
                        train.class.map((item) => {
                            return (
                                <div>
                                    {item}
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default TrainDetail
