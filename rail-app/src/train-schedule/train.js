import { useLocation } from "react-router-dom"


const TrainDetail = (props) => {
    const location = useLocation();
    // const train = {
    //     id: "12345",
    //     name: "Vaigai",
    //     from: "Chennai-Egmore",
    //     arrivalTime: "10:00",
    //     to: "Thiruchirapalli",
    //     reachTime: "18:00",
    //     class: ["Sitting", "Sleeper", "AC-Sleeper", "AC", "First"]
    // }

    const train = [{
        id: "12345",
        name: "Vaigai",
        from: "Chennai-Egmore",
        arrivalTime: "10:00",
        to: "Thiruchirapalli",
        reachTime: "18:00",
        class: ["Sitting", "Sleeper", "AC-Sleeper", "AC", "First"]
    },
        {id: "12346",
        name: "Vaigai - 2",
        from: "Chennai-Egmore",
        arrivalTime: "11:00",
        to: "Thiruchirapalli",
        reachTime: "18:00",
        class: ["Sitting", "Sleeper", "AC-Sleeper", "AC", "First"]}
    ]
    // const train = props.train_det;
    // console.log("The Train Details to be displayed: ",props.train_det);
 
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
