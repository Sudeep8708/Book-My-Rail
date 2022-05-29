import InputWithIcon from "./input";
import ResponsiveDatePickers from "./date_picker";
import SelectTextFields from "./select";
import ContainedButtons from "./button";
import "./plan.css"

const Plan_your_journey = () => {
    return ( 
        <div className="form-container" >
            <h1> Plan Your Journey </h1> 
            <div className="city">
            <InputWithIcon label="from" id="form"/>
            </div>
            <div className="city">
            <InputWithIcon label="to" id="to"/>
            </div>
            <div>
            <ResponsiveDatePickers/>
            </div>
            <SelectTextFields/>
            <ContainedButtons value="Search" href="/authentication"/>
        </div>
    );
}

export default Plan_your_journey;
