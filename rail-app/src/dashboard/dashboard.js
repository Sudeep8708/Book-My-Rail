import { useState } from "react"

export default function DashBoard () {
	const [account, setAccount] = useState({
		name: "Nitish",
		contact: 7200838025,
		email: "niti@gml.com",
		aadhar: "A2032904"
	})
	return (
		<>
			<div className="container dashboard">
				<h1>Profile</h1>
				<div>{account.name}</div>
				<div>{account.contact}</div>
				<div>{account.email}</div>
				<div>{account.aadhar}</div>
			</div>
		</>
	)
}
