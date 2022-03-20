<template>
<Header />
<Button className="btn-gray" text="Оформить заказ" />
<Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Button from "@/components/Buttons/Button.vue";
export default {
  components: {Header,Footer,Button},
};
</script>

<style lang="scss" scoped>
</style> 
