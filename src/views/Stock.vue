<template>
<Header />
<StockList />
</template>

<script>
import StockList from "@/components/Stock/StockList";
import Header from "@/components/Header/Header.vue";

export default {
  components: {Header,StockList},
};
</script>