<template>
  <div class="container">
    <Title title="АКЦИИ" />
    <hr />
  </div>
  <div class="wrapper">
    <div class="stock__list">
    <div class="stock__items">
      <div class="col-4">
        <StockItem :label="firstName" />
      </div>
      <div class="col-4">
        <StockItem :label="secondName" />
      </div>
      <div class="col-4">
        <StockItem :label="threeName" />
      </div>
      <div class="col-4">
         <StockItem :label="secondName" />
      </div>
      <div class="col-4">
        <StockItem :label="threeName" />
      </div>
      <div class="col-4">
         <StockItem :label="firstName" />
      </div>
      <div class="col-4">
        <StockItem :label="threeName" />
      </div>
      <div class="col-4">
         <StockItem :label="firstName" />
      </div>
      <div class="col-4">
        <StockItem :label="secondName" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Title from "@/components/Title/Title";
import StockItem from "./StockItem.vue";

export default {
  components: { Title, StockItem },
  setup() {
    return {
      firstName: "Без мяса? Здесь!",
      secondName: "Выгодное комбо c напитками",
      threeName:"Сырный бортик",
    }
  }
};
</script>

<style>

</style>