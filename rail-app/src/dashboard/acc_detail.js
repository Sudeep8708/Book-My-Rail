import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function AccDetails({account,changeAccount}) {
    return (
        <div className="container profile-container">
            <h1>Profile</h1>
            <div>{account.name}</div>
            <div>{account.contact}</div>
            <div>{account.email}</div>
            <div>{account.aadhar}</div>
			<div>
				<FontAwesomeIcon icon={faEdit} size="lg" onClick={changeAccount}/>
			</div>
        </div>
    );
}
