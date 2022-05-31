import { NavLink } from "react-router-dom"
import FormField from "./formfield";
const BasicDetails = (acc) => {
    const account = acc.account;
    return (
        <form className="form-entry">
            <FormField
                label="name"
                type="text"
                onChange={acc.onChangeAccount}
            />
            <FormField
                label="email"
                type="email"
                onChange={acc.onChangeAccount}
            />
            <br />
            <FormField
                label="password"
                type="password"
                onChange={acc.onChangeAccount}
            />
            <br />
            <div>
                <input
                    type="submit"
                    value="Continue"
                    onClick= {() => {}}
                />
                <NavLink to="personal" className="title">
                    <input
                        type="button"
                        value="Continue"
                        onClick= {() => {}}
                    />
                </NavLink>
            </div>
        </form>
    );
};

export default BasicDetails;
