<script>
// Importo il file "store.js"
import { store } from '../store.js';

export default {
    name: "SingleCharacter",
    props: ["movie"],
    data() {
        return {
            store,
            // Milestone 2 - Creo un array per rendere dinamiche le bandiere.
            flagsArray: [
                {
                    image: "image/France.png",
                    language: "fr",
                },
                {
                    image: "image/Italy.png",
                    language: "it",
                },
                {
                    image: "image/Spain.png",
                    language: "es",
                },
                {
                    image: "image/Uk.png",
                    language: "en",
                },
                {
                    image: "image/lgbt.png",
                    language: "lgbt",
                },

            ]
        }
    },
    methods: {
        // Creo un metodo "creaPathImg" per concatenare l'immagine.
        creaPathImg() {
            return this.store.urlImage + "w342" + this.movie.poster_path;
        },
        // Milestone 3 - Creo un metodo per trasformare il voto da 1 a 10 decimale in un numero intero da 1 a 5.
        starsVote(vote) {
            let numberStars = Math.round(vote / 2);
            return numberStars;
        },
    },
    computed: {
        // Milestone 2
        // Creo un metodo "getFlags" per far apparire le bandiere in maniera dinamica.
        getFlags() {
            for (let i = 0; i < this.flagsArray.length; i++) {
                if (this.movie.original_language === this.flagsArray[i].language) {
                    return this.flagsArray[i].image;
                }
            }
            return this.flagsArray[this.flagsArray.length - 1].image;
        },
    },
    mounted() {
        this.creaPathImg();
    }
}

</script>

<template>
    <!-- Qui importerò in "SingleCharacter" -->
    <div class="singlecharacter">
        <div>
            <img :src="creaPathImg()">
        </div>
        <!-- Creo un v-if per i "Movie" e per le "Tv Series" -->
        <div
            v-if="movie.title !== '' && movie.original_title !== '' && movie.name !== '' && movie.original_name !== ''">
            <div>Titolo:{{ movie.title }} {{ movie.name }}</div>
            <div>Titolo Originale:{{ movie.original_title }} {{ movie.original_name }}</div>
        </div>
        <div>
            <!-- Richiamo il metodo "getFlags" -->
            <img :src="getFlags" alt="" class="flag">
        </div>
        <div>Voto:{{ movie.vote_language }}
            <!-- Richiamo il metodo "starsVote" -->
            <i v-for="star in starsVote(movie.vote_average)" :key="star">
                <font-awesome-icon icon="fa-solid fa-star" />
            </i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.singlecharacter {
    margin: 10px;

    div {
        font-size: 15px;
    }

    .flag {
        width: 10%;
        height: 20px;
    }
}
</style>