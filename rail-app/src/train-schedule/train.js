const TrainDetail = (props) => {
    const trainDetail = props.trainDetail;
    const userFetch = props.userFetch;
    console.log(userFetch.from);
    // console.log("The Train Details to be displayed: ",props.train_det);
 
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
             {/* <div className="class-container">
                    {
                        trainDetail.map((item) => {
                            return (
                                <div>
                                    {item}
                                </div>
                            )
                        })
                    }
            </div>  */}
        </div>
        )
        }
        </>
    )
}

export default TrainDetail
