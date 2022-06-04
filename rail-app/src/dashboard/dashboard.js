import { useState } from "react"

export default function DashBoard () {
	const [account, setAccount] = useState({
		name: "Nitish",
		contact: 7200838025,
		email: "niti@gml.com",

	})
	return (
		<>
			<div className="container">
				<div>{account.name}</div>
			</div>
		</>
	)
}
