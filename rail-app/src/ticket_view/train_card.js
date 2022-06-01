import './card.css';
import TrainFromTO from './trainFromTo.js'
const Train_card = ()=>{

    return(
        <>
        <div className="train_card">
            <div style={{display:'flex',flexDirection:'column'}}>
                <p>NATIONAL EXPRESS</p>
            <img src="image.jpg" style={{height:'120px',width:'150px'}} alt="train_logo"/>
            </div>  
            <TrainFromTO date="12-05-2022" time="9:00" from_to = "CHN"/>    
            <TrainFromTO date="12-05-2022" time="14:00" from_to = "CBE"/>
        </div>
        <br/>   
        <hr/>
        </>
    )
}

export default Train_card;