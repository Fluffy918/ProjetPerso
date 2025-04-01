import { useEffect, useState } from "react";

function MangaList() {
    const [mangas, setMangas] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/mangas')
            .then(res => res.json())
            .then(data => setMangas(data))
            .catch(error => console.error('Erreur lors du chargement du mangas:', error)
            )
    }, [])

    return (
        <div>
            <h2>Liste des Mangas</h2>
            <ul>
                {mangas.map(manga => (
                    <li key={manga.id}>
                        <h3>{manga.titre}</h3>
                        <p>{manga.description}</p>
                        <img src={manga.couverture} alt={manga.titre} width={150} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MangaList