<template>
  <div class="cart__add-items">
    <div class="cart__add-item col-3">
      <div class="cart__add-description">
        <img class="cart__add-image" :src="item.image" alt="add-image" />
        <div class="cart__add-label">
          <h4 class="cart__add-subtitle">{{ item.Named }}</h4>
          <div class="cart__add-push">
            Добавить
            <img
              class="cart__add-plus"
              src="@/assets/images/add-plus.svg"
              alt="title"
            />
          </div>
          <span class="cart__add-price"> 1640 ₽</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    item: {
      type: Object,
      reqired: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>