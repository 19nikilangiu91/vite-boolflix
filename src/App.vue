<script>

import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import SingleCharacter from './components/SingleCharacter.vue'



// Importo il file "store.js"
import { store } from './store.js';

export default {
  name: "App",
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    CharactersList,
    SingleCharacter
  }
}
</script>

<template>
  <AppHeader />
  <CharactersList />
  <SingleCharacter />
</template>

<style lang="scss" >
@use './style/general.scss' as*;
@use './style/partials/variables' as*;

h1 {
  color: $primary;
}
</style>
