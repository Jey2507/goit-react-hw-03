import Contact from '../Contact/Contact'
import css from "../ContactList/ContactList.module.css";

export default function ContactList({contacts, onDelete}) {
    return(
        <ul className={css.list}>
            <Contact contacts={contacts} onDelete={onDelete} />
        </ul>
    );
}
