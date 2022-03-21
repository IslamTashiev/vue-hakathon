<template>
  <div class="cart__add-items">
    <div class="cart__add-item col-3">
      <div class="cart__add-description">
        <img class="cart__add-image" :src="item.image" alt="add-image" />
        <div class="cart__add-label">
          <h4 class="cart__add-subtitle">{{ item.Named }}</h4>
          <div class="cart__add-pushitems">
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
.cart__add-items {
  position: relative;
  &::before {
    position: absolute;
    width: 1px;
    height: 100%;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    right: -5px;
  }
  &:last-child {
    padding-bottom: 0;
    &::before {
      display: none;
    }
  }
  @media (max-width: 877px) {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 100%
      );
      bottom: 0;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
    // &::before {
    //   display: none;
    // }
  }

  @media (max-width: 1230px) {
    &:last-child {
      &::before {
        display: block;
      }
    }
  }
  @media (max-width: 933px) {
    .cart__add-items {
      &:last-child {
        &::before {
          display: block;
        }
      }
    }
  }
  @media (max-width: 878px) {
    &::before {
      display: none;
    }
    &:last-child {
      padding-bottom: 0;
      &::before {
        display: none;
      }
    }
  }

  @media (max-width: 630px) {
    &::before {
      display: none;
    }
    &:last-child {
      padding-bottom: 0;
      &::before {
        display: none;
      }
    }
  }
}
</style>