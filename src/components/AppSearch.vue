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
    <div class="container">
        <div>
            <label for="search-character"></label>
            <input class="form-control" type="text" id="search-character" placeholder="Search your movie!"
                v-model="store.searchText">
        </div>
        <div>
            <button type="submit" class="btn btn-primary" @click.prevent="$emit('search')">Search</button>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use 'src/style/partials/variables' as*;

.container {
    display: flex;
    align-items: center;
}

.btn {
    padding: 5px;
    margin: 0 20px;
    background-color: $third;
    border: 3px solid $secondary;
    border-radius: 5%;
    color: $secondary;
}

.form-control {
    padding: 5px;
    background-color: $third;
    border: 3px solid $secondary;
    border-radius: 5%;
    color: $primary;
    outline-style: none;
}
</style>