import FormField from "./formfield";
import { useState } from "react";

const LoginDetails = () => {
    const profile = {
        username: "",
        password: "",
    };
    const [account, setAccount] = useState(profile);
    const onChangeAccount = (e) => {
        setAccount({ ...account, [account.target.name]: e.target.value });
    };
    return (
        <div className="container acc-details">
            <p>Log in</p>
            <form className="form-entry">
                <FormField
                    label="name"
                    type="text"
                    onChange={onChangeAccount}
                />
                <br />
                <FormField
                    label="password"
                    type="password"
                    onChange={onChangeAccount}
                />
                <div>
                    <input type="submit" value="Log in" />
                </div>
            </form>
        </div>
    );
};

export default LoginDetails;
