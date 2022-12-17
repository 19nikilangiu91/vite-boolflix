<script>
// Importo Axios
import axios from 'axios';

// Dichiaro i "components"
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import AppSearch from './components/AppSearch.vue'


// Importo il file "store.js"
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    CharactersList,
    AppSearch
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {

      let myUrl = store.apiUrl;

      if (store.searchText !== "") {
        myUrl = `${store.apiSearch}&query=${store.searchText}`
      }

      axios
        .get(myUrl)
        .then(res => {
          store.characterList = res.data.results;
        })
        .catch(err => {
          console.log("Errors", err);
        });
    }
  },
  mounted() {
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader :message="store.title" />
  <AppSearch @search="getCharacters()" />
  <CharactersList />
</template>

<style lang="scss" >
@use './style/general.scss' as*;
@use './style/partials/variables' as*;

h1 {
  color: $primary;
}
</style>
