import { Link } from "react-router-dom";

import Form from "../components/Form";
import ReseauxSociaux from "../components/ReseauxSociaux";

import Logo from "../assets/images/logo-geocode.png";

import "../styles/form.scss";


export default function Contact() {
    return (
        <>
        <Link to="/">
            <img className="logoContact" src={Logo} alt="Logo Geocode"/>
       </Link>

        <h1>Contactez-nous</h1>

       <Form/>

        <ReseauxSociaux/>
    </>
    )
}

