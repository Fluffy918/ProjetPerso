const API_URL = "http://localhost:5000";

export async function fetchMangas() {
    try {
        const res = await fetch(`${API_URL}/mangas`);
        return await res.json();
    } catch (error) {
        console.error('Erreur lors du chargement des mangas:', error);
        return [];
        
    }
}