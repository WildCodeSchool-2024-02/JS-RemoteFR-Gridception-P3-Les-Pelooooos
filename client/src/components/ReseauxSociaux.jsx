import { Link } from "react-router-dom";

import iconX from "../assets/images/iconX.png";
import iconInsta from "../assets/images/iconInsta.png";
import iconFb from "../assets/images/iconFb.png";

import "../styles/reseauxSociaux.scss";

export default function reseauxSociaux() {

    return (
        <>
        <Link to="https://x.com/X" target="_blank">
            <img className="iconX" src={iconX} alt="Icon x(twitter)"/>
       </Link>

       <Link to="https://www.instagram.com/" target="_blank">
            <img className="iconInsta" src={iconInsta} alt="Icon Instagram"/>
       </Link>

       <Link to="https://www.facebook.com/" target="_blank">
            <img className="iconFb" src={iconFb} alt="Icon Facebook"/>
       </Link>
        
        </>
    )
    }
