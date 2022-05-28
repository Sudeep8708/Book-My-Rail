import InputWithIcon from "./input";
import ResponsiveDatePickers from "./date_picker";
import SelectTextFields from "./select";
import ContainedButtons from "./button";

const Plan_your_journey = () => {
    return ( 
        <div >
            <h1> Plan Your Journey </h1> 
            <InputWithIcon label="from" id="form"/>
            <InputWithIcon label="to" id="to"/>
            <ResponsiveDatePickers/>
            <SelectTextFields/>
            <ContainedButtons value="Search" href="/authentication"/>
        </div>
    );
}

export default Plan_your_journey;