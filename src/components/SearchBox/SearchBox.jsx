import css from "../SearchBox/SearchBox.module.css"
import { useId } from "react"


export default function SearchBox({value, onSearch}) {
    const searchId = useId();
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor={searchId}>Find contacts by name</label>
            <input value={value} onChange={(event) => onSearch(event.target.value)} className={css.input} type="text" id={searchId}/>
        </div>
    )
}