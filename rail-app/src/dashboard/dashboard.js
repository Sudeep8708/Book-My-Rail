import AccDetails from "./acc_detail";
import TravelHistory from "./travel-history";

export default function DashBoard() {
    return (
        <div className="dashboard">
            <AccDetails />
            <TravelHistory />
        </div>
    );
}
