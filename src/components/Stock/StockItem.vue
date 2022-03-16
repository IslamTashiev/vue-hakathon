<template>
<div class="stock__list">
  <div class="stock__items">
    <div class="col-4">
      <div class="stock__item">
        <div class="stock__image">
          <img :src="item.image"/>
        </div>
        <div class="stock__description">
          <div class="stock__header">
            <div class="stock__title">{{ item.tatelName }}</div>
          </div>
          <div class="stock__subtitle">
            Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и
            грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер,
            Рулетики с сыром, Картофель из печи, Картофельные оладьи или
            Греческий салат. Выберите свой вкус!
          </div>
          <div class="stock__footer">
            <div class="stock__data">до 31 июля.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
// import StockImgMeat from "@/assets/images/stock-meat.svg";
// // import StockImgKombo from "@/assets/images/stock-meat.svg";
// // import StockImgSyrniki from "@/assets/images/stock-meat.svg";
export default {
   props: {
    item: {
      type: Object,
      reqired: true
    }
  },
  setup() {
    return {
    };
  },
};
</script>

<style>
</style>