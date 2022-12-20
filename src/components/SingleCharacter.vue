<script>
// Importo il file "store.js"
import { store } from '../store.js';

export default {
    name: "SingleCharacter",
    props: ["info"],
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
        // Milestone 3 - Creo un metodo "creaPathImg" per concatenare l'immagine.
        creaPathImg() {
            return this.store.urlImage + "w342" + this.info.poster_path;
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
                if (this.info.original_language === this.flagsArray[i].language) {
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
            <img class="image" :src="creaPathImg()" onerror="this.src= 'image/imagenotfound.webp'">
            <div class="content">
                <!-- Creo un v-if per i "Movie" e per le "Tv Series" -->
                <!-- Milestone 4 - Sposto il contenuto all'interno della carta-->
                <div
                    v-if="info.title !== '' && info.original_title !== '' && info.name !== '' && info.original_name !== ''">
                    <div>Titolo:{{ info.title }} {{ info.name }}</div>
                    <div>Titolo Originale:{{ info.original_title }} {{ info.original_name }}</div>
                    <!-- Richiamo il metodo "getFlags" -->
                    <div>Language:
                        <img :src="getFlags" alt="flag" class="flag">
                    </div>
                    <div>Voto:{{ info.vote_language }}
                        <!-- Richiamo il metodo "starsVote" -->
                        <i v-for="star in starsVote(info.vote_average)" :key="star" class="stars">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </i>
                    </div>
                    <div>Overview:{{ info.overview }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/variables' as*;

.singlecharacter {
    margin: 10px;
    position: relative;
    ;

    .image {
        width: 342px;
        height: 513px;
    }

    .content {
        overflow: scroll;
        width: 342px;
        height: 513px;
        padding: 30px;
        top: 0;
        position: absolute;
        font-size: 0px;

        .flag {
            width: 0%;
            height: 0px;
        }

        &:hover {
            font-size: 20px;

            background-color: $third;

            .flag {
                width: 10%;
                height: 20px;
            }
        }

        .stars {
            color: $sixth;
        }
    }
}
</style>