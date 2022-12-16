<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    HelloWorld
  }
}
</script>

<template>
  <HelloWorld />
</template>

<style lang="scss" >
@use './style/general.scss' as*;
@use './style/partials/variables' as*;

h1 {
  color: $primary;
}
</style>
