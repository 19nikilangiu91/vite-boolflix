<script>
// Importo il file "store.js"
import { store } from '../store.js';

export default {
    name: "SingleCharacter",
    props: ["movie"],
    data() {
        return {
            store
        }
    },
    methods: {
        // Creo un metodo "creaPathImg" per concatenare l'immagine
        creaPathImg() {

            return this.store.urlImage + "w185" + this.movie.poster_path;
        }
    },

    mounted() {
        this.creaPathImg();
    }
}

</script>

<template>
    <!-- Qui importerò in "SingleCharacter" -->
    <div>
        <img :src="creaPathImg()">
        <ul>
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li>{{ movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>