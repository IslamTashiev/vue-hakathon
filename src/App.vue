<template>
<<<<<<< HEAD
  <!-- <div v-if="true"> -->
  <!-- <Header /> -->
  <router-view />
  <!-- <Footer /> -->
  <!-- </div> -->
  <!-- <div v-else>
  <Header />
  <BurgerMenu />
</div> -->
</template>

<script>
import BurgerMenu from "@/components/Header/BurgerMenu";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: { BurgerMenu, Header, Footer },
  setup() {},
};
=======
  <router-view/>
  <router-link to="/admin" v-if="showAdminBtn" class="btn admin__btn">
    <img :src="shieldIcon" alt="">
  </router-link>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core'
import {user} from "./composables/useUser"
import shieldIcon from "./assets/images/shield.svg"
export default {
  setup() {

      const showAdminBtn = ref(false)
      watchEffect(() => {
        if (user.value) {
          if (user.value.email === "admin@gmail.com") {
            showAdminBtn.value = true
          }
        }else{
          showAdminBtn.value = false
        }
      })
      return{
        showAdminBtn,
        shieldIcon
      }
      
  },
}
>>>>>>> d3dbbf0ee10cad29ec9f255a443fb48565afdc26
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

  &.welcome {
    height: 100vh;
    body {
      overflow-y: hidden;
    }
  }
}
<<<<<<< HEAD
=======
.admin__btn{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

>>>>>>> d3dbbf0ee10cad29ec9f255a443fb48565afdc26
</style>