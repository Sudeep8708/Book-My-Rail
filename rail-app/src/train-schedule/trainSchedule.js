import TrainDetail from "./train";

const TrainSchedule = () => {
    return (
        <div>
            <div className="container train-container">
                <TrainDetail />
                <input type="submit" value="Book now" />
            </div>
        </div>
    );
};

export default TrainSchedule;
