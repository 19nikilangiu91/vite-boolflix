<script>

export default {
    name: "AppHeader",
    props: ["message"]
}

</script>

<template>
    <h1>{{ message }}</h1>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/variables' as*;

h1 {
    color: $secondary;
}
</style>