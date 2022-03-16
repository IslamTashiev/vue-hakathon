<template>
  <div class="container">
          <div class="title"><h1>АКЦИИ</h1></div>
        </div>
        <hr />
        <section class="stock__list">
         <div class="container">
            <div class="stock__items">
            <div class="col-4">
              <div class="stock__item">
                <div class="stock__image">
                  <img :src="StockImgMeat" alt="item-image" />
                </div>
                <div class="stock__description">
                  <div class="stock__header">
                    <div class="stock__title">Без мяса? Здесь!</div>
                  </div>
                  <div class="stock__subtitle">
                    Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу
                    «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками,
                    Грибной Стартер, Рулетики с сыром, Картофель из печи,
                    Картофельные оладьи или Греческий салат. Выберите свой вкус!
                  </div>
                  <div class="stock__footer">
                    <div class="stock__data">до 31 июля.</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
         </div>
        </section>
</template>

<script>
import StockImgMeat from "@/assets/img/stock-meat.svg";
export default {
  props: ["items", "label"],
  setup(props) {
    return {
      StockImgMeat,
    };
  },
};
</script>

<style>
</style>