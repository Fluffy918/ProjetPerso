import express from "express"
import pool from "./database/bdd"
import cors from "cors"
const app = express
//const port = 3000

app.use(express.json())

app.request(cors())

app.get('/mangas', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM mangas')
        res.json(rows)
    } catch (error) {
        console.error('Erreur lors de la récupération des mangas: ', error);
        res.status(500).json({error: 'Erreur serveur'})
        
    }
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    
})

app.post('/', (req, res) => {
    res.send('post request')
})

//app.listen(port, () => {
//    console.log(`Exemple app listening on port ${port}`);
//    
//})