import './card.css';

const pass_details = ()=>{

    return(
        <div className="pass_details">
      <p style = {{fontWeight:'bold',fontSize:"20px"}}>Name 1 </p>
      <hr/>
      <br/> 
      <span className = "key">Train No :</span>
      <span className="val"></span>
      <span className = "key">Name :</span>  
      <span className="val"></span>
      <span className = "key">Email :</span>  
      <span className="val"></span>
      <span className = "key">Phone :</span> 
      <span className="val"></span> 
      <span className = "key">Seat Number :</span>
      <span className = "val"></span> 
      <span className = "key">Coach :</span>
      </div>
    )
}

export default pass_details;