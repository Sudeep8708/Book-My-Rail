    import './card.css';
    import Traincard from './train_card.js'
    import PassDetails from './pass_details.js'
    const Card = ()=>{

        return(
            <>
            <div className = "card">
                <p style={{color:'green',textAlign:'center',fontSize:'22px'}}>YOUR BOOKING IS COMPLETE !</p>
                <p style = {{textAlign:'center'}}>Happy Journey ! </p>
                <Traincard/>
                <p style = {{fontSize:'22px'}}>PASSENGER:</p>
                <PassDetails/>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',padding:'20px'}}>
            <button style = {{backgroundColor:'black',color:'white',fontWeight:'bold',padding:'10px',width:'100px'}}>EXIT</button>
            <button style = {{backgroundColor:'green',color:'white',fontWeight:'bold',padding:'10px',width:'100px'}}>PRINT</button>           
            </div>
            <div className="footer"></div>
            </>
        )
    }

    export default Card;
