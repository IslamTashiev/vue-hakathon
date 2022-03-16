<template>
  <router-view/>
</template>

<style lang="scss">
@import "@/assets/scss/style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: linear-gradient(360deg, #211f20 0%, #44403f 100%) no-repeat;

  &._blocked {
    overflow: hidden;
  }
}
</style>