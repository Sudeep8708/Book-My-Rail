    import './card.css';
    import Traincard from './train_card.js'
    import PassDetails from './pass_details.js'
    const Card = ()=>{
        const ticket = {
            train_no: "12345",
            train_name: "Rockfort Express",
            from: "Chennai",
            to: "Trichy",
            startTime: "10:00",
            endTime: "16:00",
            passenger: [
                {
                    ticket_no: "4343",
                    name: "Nitish",
                    age: 18,
                    Coach: "D5",
                    seat: 35,
                    contact: 7200838025,
                },
                {
                    ticket_no: "4345",
                    name: "Nitish",
                    age: 18,
                    Coach: "D5",
                    seat: 35,
                    contact: 7200838025,
                },
                {
                    ticket_no: "4347",
                    name: "Nitish",
                    age: 18,
                    Coach: "D5",
                    seat: 35,
                    contact: 7200838025,
                },
            ],
        };
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
