import { reactive } from 'vue'

// Importo lo "store"
export const store = reactive({
    // Dichiaro la "characterList" che riceverà le informazioni dall' "API".
    characterList: [],
    // Dichiaro l'url dell' "apiURL".
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=",
    // Dichiaro l'"apiKEY"
    apiKEY: "1c9ccf08e6418fe30c2b52b60d794a0e",
    // Dichiaro l' "urlImage"
    urlImage: "https://image.tmdb.org/t/p/",

    title: "BoolFlix",
    // Diachiaro il "searchText" che servirà per la ricerca.
    searchText: "",
});