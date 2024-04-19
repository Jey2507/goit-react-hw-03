import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";

export default function Contact({contacts:{name, number, id}, onDelete}) {
    return (
        <>
            <li className={css.item} >
                <div className={css.contact}>
                    <h3 className={css.name}><RiContactsFill /> {name}</h3>
                    <p className={css.descr}><FaPhoneAlt /> {number}</p>
                </div>    
                <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
            </li>
        </>
    );
}