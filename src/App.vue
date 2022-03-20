<template>
<div v-if="false">
  <Header />
  <router-view/>
  <Footer />
</div>
<div v-else>
  <Header />
  <BurgerMenu />
</div>
</template>

<script>
import BurgerMenu from "@/components/Header/BurgerMenu"
import Header from "@/components/Header/Header.vue"
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {BurgerMenu,Header,Footer},
  setup() {
    
  },
}
</script>


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