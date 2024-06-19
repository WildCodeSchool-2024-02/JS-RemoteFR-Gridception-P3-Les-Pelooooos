import "../styles/form.scss";

export default function Form() {

    return (
        <form action="">
    
            <label htmlFor="nom">Nom</label>
            <input type="text" value="nom"/>
    
            <label htmlFor="prénom">Prénom</label>
            <input type="text" value="prénom"/>
    
            <label htmlFor="email">Email</label>
            <input type="email" value="email"/>
    
            <label htmlFor="objet">Objet</label>
            <select name="objet" id="objet">
                <option value="">Choisis ton objet</option>
                <option value="information">Demande d'informations</option>
                <option value="partenariat">Demande de partenariat</option>
                <option value="autres">Autre</option>
            </select>
    
            <label htmlFor="message">Message</label>
            <input type="text" value="message"/>

            <input type="sublit" value="Envoyer le formulaire"/>

        </form>
    )
    }
