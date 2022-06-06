import './train_enq.css';
import { useLocation } from 'react-router-dom';
import Traincard from '../ticket_view/train_card.js' 
const Result  = ()=>{
    const location = useLocation();
    const temp = location.state;
    const obj = {
        name: 'Vaigai Express',
        number : '17254',
        arrival: "9:00",
        departure: "14:00",
        from: "Chennai Central - MAS",
        to: "Tirunelveli - TEN",
        dateofjourney: "today's date"
    }
    return(
        <>
        <p style = {{fontWeight:'bold',fontSize:'20px',marginTop:'40px'}}>Running Status of Train Number : {temp}</p>
        <Traincard name = {obj.name} number={obj.number} arrival={obj.arrival} departure={obj.departure} from={obj.from} to={obj.to} dateofjourney = {obj.dateofjourney} />
        
        <div className = "position">

            <div className = "title">     
            <p>Arrived Station</p>          
            <p>Station Name</p>
            <p>Departure</p> 
            </div>
            <hr/>

            <div className = "stations">
            <span>CBE</span>
            <div className='route'>
            <div className = "line"></div>
            <div className="circle"></div>
            </div>
            <span>Coimbatore</span>
            <span>22:50</span>
            </div>

            <div className = "stations">
            <span>CBE</span>
            <div className='route'>
            <div className = "line"></div>
            <div className="circle"></div>
            </div>
            <span>Coimbatore</span>
            <span>22:50</span>
            </div>
        
        </div>
        </>
    )
}

export default Result;