<script>

// Importo il file "store.js"
import { store } from '../store.js';

export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }

}

</script>

<template>
    <div>
        <div>
            <label for="search-character"></label>
            <input class="form-control" type="text" id="search-character" placeholder="Search Character"
                v-model="store.searchText">
        </div>
        <div>
            <button type="submit" class="btn btn-primary" @click.prevent="$emit('search')">Search</button>
        </div>

    </div>

</template>

<style lang="scss" scoped>

</style>