import style from "../Landing/Landing.module.css";
import {Link} from "react-router-dom";
import PATHROUTES from "../Helpers/PathRoutes";
import React, { useState } from 'react';
import useSound from "use-sound";
import pacman from '../Sonido/pacmanSound.mp3';

const Landing = () => {

  const [showButton, setShowButton] = useState(true);
  const [playSound] = useSound (pacman);
  const [stopSound, {stop}] = useSound();


  return (
    <>
    <div className={style.bordeCont}>
      <div className={style.parche}>
        <div className={style.switchContainer} >
        <button className={style.switch} onClick={playSound} >Sound</button>
        <button className={style.switch2}  onClick={stop} >stop</button>
      </div>
       </div>
       <div className={style.pacman}></div>
      <div className={style.cajaName} ><h3 className={style.pacmanComida} >Welcome to app Video Games</h3></div> 
    </div>

    <div className={style.container} >
       <div className={style.containersButton}>
        <Link to={PATHROUTES.HOME}><button className={style.button} >PLAY</button></Link>
         </div>
      </div>

        
        </>
  )
}

export default Landing