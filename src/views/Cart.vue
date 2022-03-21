<template>
<Header />
<Nav/>
<CartItem/>
<Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import CartItem from "@/components/Cart/CartItem.vue";
import Nav from "@/components/Nav/Nav.vue";
export default {
  components: { Header, Footer, CartItem, Nav },
};
</script>

<style lang="scss" scoped>
</style> 
