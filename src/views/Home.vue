<template>
<!-- <div v-if="false" class="wrapper"> -->
  <Header />
  <main>
    <Hero />
    <Nav />
    <ProductList />
    <Contacts/>
  </main>
  <Footer />
<!-- </div> -->
<!-- <div v-else>
  
</div> -->
</template>

<script>
import Header from "@/components/Header/Header.vue"
import Hero from "@/components/Hero/Hero.vue"
import Nav from "@/components/Nav/Nav.vue"
import ProductList from "@/components/ProductList/ProductList.vue"
import Contacts from "@/components/Footer/Contacts.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "Home",
  components: {Header,Hero,Nav,ProductList,Footer,Contacts},
};
</script>
