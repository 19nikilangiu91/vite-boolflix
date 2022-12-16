<script>
// Importo "SingleCharacter".
import SingleCharacter from './SingleCharacter.vue'

// Importo il file "store.js"
import { store } from '../store.js';

export default {
    name: "CharactersList",
    components: {
        SingleCharacter,
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <!-- Qui vado a riportare il "Template Statico" che poi importerò in "SingleCharacter" -->
    <div>
        <img src="https://image.tmdb.org/t/p/w342/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" alt="">
        <ul>
            <li>Titolo</li>
            <li>Titolo Originale</li>
            <li>Lingua</li>
            <li>Voto</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 100px;
    height: 100px;
}
</style>