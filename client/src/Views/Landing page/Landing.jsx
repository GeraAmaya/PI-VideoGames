import "./Landing.css";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    
      <div className="landing-Page">
        <div className="play" >
      <NavLink to={"/home"} >
       <button className="button-play"> PLAY</button>
          </NavLink>
          </div>
        
      </div>
    
  );
};
export default Landing;
