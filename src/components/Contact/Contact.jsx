import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";

export default function Contact({contacts, onDelete}) {
    return (
        <>
        {contacts.map(contact => (
            <li className={css.item} key={contact.id}>
                <div className={css.contact}>
                    <h3 className={css.name}><RiContactsFill /> {contact.name}</h3>
                    <p className={css.descr}><FaPhoneAlt /> {contact.number}</p>
                </div>    
                <button className={css.button} onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
        ))}
        </>
    );
}