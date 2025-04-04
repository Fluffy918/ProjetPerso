import { useEffect, useState } from "react";
import "../MangasList.css"

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
        <>
            <h2>Liste des Mangas</h2>
            <div className="mangas-container">
                {mangas.map(manga => (
                    <div key={manga.id} className="manga-card">
                        <img src={manga.couverture} alt={manga.titre} width={150} />
                        <h3>{manga.tittre}</h3>
                        <p>{manga.description}</p>
                        <p>{manga.auteur}</p>
                        <p>{manga.statut}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MangaList