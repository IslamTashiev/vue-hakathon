<template>
<div class="wrapper">
  <Header />
  <main>
    <Hero />
    <Nav />
    <ProductList />
  </main>
</div>
</template>

<script>
import Header from "@/components/Header/Header.vue"
import Hero from "@/components/Hero/Hero.vue"
import Nav from "@/components/Nav/Nav.vue"
import ProductList from "@/components/ProductList/ProductList.vue"

export default {
  name: "Home",
  components: {Header,Hero,Nav,ProductList},
};
</script>
