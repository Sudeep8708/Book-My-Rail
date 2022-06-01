import { NavLink } from "react-router-dom"
import FormField from "./formfield";
const PersonalDetails = (acc) => {
    const account = acc.account;
    return (
        <form className="form-entry">
            <FormField
                label="address"
                type="text"
                onChange={acc.onChangeAccount}
            />
            <FormField
                label="age"
                type="number"
                onChange={acc.onChangeAccount}
            />
            <br />
            <FormField
                label="gender"
                type="text"
                onChange={acc.onChangeAccount}
            />
            <br />
            <FormField
                    label="proof"
                    type="text"
                    onChange={acc.onChangeAccount}
            />
            <div>
                  <input
                      type="submit"
                      value="Create Account"
                      onClick={acc.handleSubmit}
                  />
            </div>
        </form>
    );
  };

  export default PersonalDetails;
