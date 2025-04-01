import { useState, useEffect } from "react";
import { fetchMangas } from "../api";

function Menu() {
    const [mangas, setMangas] = useState([])

    useEffect(() => {
        fetchMangas().then(setMangas)
    }, [])

    return (
        <div>
            <ul>
                {mangas.map((manga) => (
                    <li key={manga.id}>{manga.titre}</li>
                ))}
            </ul>
        </div>
    )
};

export default Menu;