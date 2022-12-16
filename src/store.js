import { reactive } from 'vue'

// Importo lo "store"
export const store = reactive({
    // Dichiaro la "characterList" che riceverà le informazioni dall' "API".
    characterList: [],
    // Dichiaro l'url dell' "API".
    apiURL: "https://api.themoviedb.org/3/search/movie/?api_key=1c9ccf08e6418fe30c2b52b60d794a0e&query=Star Wars",
    // Importerò il "title" ad "App" richimandolo tramite "props" da "AppHeader".
    title: "BoolFlix",
});