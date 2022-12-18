import { reactive } from 'vue'

// Importo lo "store"
export const store = reactive({
    // Dichiaro la "characterList" che riceverà le informazioni dall' "API".
    characterList: [],
    // Dichiaro l'url dell' "apiUrl".
    apiUrl: "https://api.themoviedb.org/3/movie/popular/?api_key=1c9ccf08e6418fe30c2b52b60d794a0e",
    // Dichiaro l'url dell' "apiSearch".
    apiSearch: "https://api.themoviedb.org/3/search/multi/?api_key=1c9ccf08e6418fe30c2b52b60d794a0e",

    // Dichiaro l' "urlImage"
    urlImage: "https://image.tmdb.org/t/p/",

    title: "BoolFlix",
    // Diachiaro il "searchText" che servirà per la ricerca.
    searchText: "",
});