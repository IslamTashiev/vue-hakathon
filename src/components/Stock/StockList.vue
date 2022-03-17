<template>
  <div class="container">
    <Title title="АКЦИИ" />
    <hr />
  </div>
  <div class="stock__container">
      <div class="stock__items">
        <StockItem v-for="item in items" :key="item.id" :item="item" />
        <StockItem v-for="item in items" :key="item.id" :item="item" />
        <StockItem v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Title from "@/components/Title/Title";
import StockItem from "./StockItem.vue";
import StockImgMeat from "@/assets/images/stock-meat.svg";
import StockImgKombo from "@/assets/images/stock-kombo.svg";
import StockImgSyrniki from "@/assets/images/stock-syrniki.svg";

export default {
  components: { Title, StockItem },
  setup() {
    const items = ref([
      {
        id: 2,
        tatelName: "Выгодное комбо c напитками",
        image: StockImgKombo,
      },
      {
        id: 1,
        tatelName: "Без мяса? Здесь!",
        image: StockImgMeat,
      },
      {
        id: 3,
        tatelName: "Сырный бортик",
        image: StockImgSyrniki,
      },
    ]);

    const handleSubmit = (items) => {
      items.value.sort(() => 0.5 - Math.random());
      console.log(items.value);
      // .sort(() => Math.random() - 0.5
    };

    return {
      items,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>