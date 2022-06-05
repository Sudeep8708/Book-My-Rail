import { useState } from "react";
import AccDetails from "./acc_detail";
import TravelHistory from "./travel-history";

export default function DashBoard() {
    const [account, setAccount] = useState({
        name: "Nitish",
        contact: 7200838025,
        email: "niti@gml.com",
        aadhar: "A2032904",
        travelHistory: [
            {
                ticket_no: 3423523,
                from: "MAS",
                to: "DLI",
                Date: "10/3/22",
            },
            {
                ticket_no: 3423523,
                from: "MAS",
                to: "DLI",
                Date: "10/3/22",
            },
            {
                ticket_no: 3423523,
                from: "MAS",
                to: "DLI",
                Date: "10/3/22",
            },
        ],
    });

	// const changeAccount = (e) => {
	// 	setAccount (prevAccount => {...prevAccount,[e]})
	// }

    return (
        <div className="dashboard">
            <AccDetails account={account}/>
			<TravelHistory history={account.travelHistory}/>	
        </div>
    );
}
