<template>
  <main>
    <div class="container">
      <div class="cart__header">
        <div class="cart__header-content">
          <div class="cart__header-content_up">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1.5 5.25L1 5.25L1 6.75L1.5 6.75L1.5 5.25Z"
                fill="white"
              />
            </svg>
            к выбору блюда
          </div>
          <div class="cart__header-content_down">
            <div class="title">
              <h1>КОРЗИНА</h1>
              <p>(в корзине 3 товара)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cart__items">
        <div class="cart__item">
          <div class="item__left">
            <img
              class="cart__item__image"
              src="@/assets/images/item-image.jpg"
              alt="item-image"
            />
            <div class="item__description">
              <h4 class="item__title">ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</h4>
              <p class="item__subtitle">
                Кальмары, мидии, креветки, сыр маасдам, красный лук, микс
                оливок, базилик, соус песто
              </p>
            </div>
          </div>
          <div class="item__right">
            <div class="item__counter">
              <div class="counter__minus">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13.9718" cy="13.972" r="13.486" fill="#72A479" />
                  <path
                    d="M8 13.8999C8 13.0715 8.67157 12.3999 9.5 12.3999H18.5C19.3284 12.3999 20 13.0715 20 13.8999V13.8999C20 14.7284 19.3284 15.3999 18.5 15.3999H9.5C8.67157 15.3999 8 14.7284 8 13.8999V13.8999Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>1</span>
              <div class="counter__plus">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.0719" cy="13.972" r="13.486" fill="#72A479" />
                  <g clip-path="url(#clip0_0_1)">
                    <path
                      d="M18.2771 12.6967H15.3463V9.766C15.3463 9.04596 14.7416 8.45658 14.0213 8.45658C13.301 8.45658 12.6962 9.04596 12.6962 9.766V12.6967H9.76547C9.04544 12.6967 8.45605 13.3015 8.45605 14.0218C8.45605 14.7421 9.04544 15.3469 9.76547 15.3469H12.6962V18.2776C12.6962 18.9976 13.301 19.587 14.0213 19.587C14.7416 19.587 15.3463 18.9976 15.3463 18.2776V15.3469H18.2771C18.9971 15.3469 19.5865 14.7421 19.5865 14.0218C19.5865 13.3015 18.9971 12.6967 18.2771 12.6967Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1">
                      <rect
                        width="11.1304"
                        height="11.1304"
                        fill="white"
                        transform="translate(8.45605 8.45658)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="item__price">1640 ₽</div>
            <div class="item__delete-btn">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="13.7285"
                  cy="14.0721"
                  r="13.486"
                  transform="rotate(45 13.7285 14.0721)"
                  fill="#72A479"
                />
                <path
                  d="M17.6035 16.1437L15.5311 14.0713L17.6035 11.999C18.1126 11.4898 18.1018 10.6455 17.5924 10.1361C17.0831 9.6268 16.2387 9.61593 15.7296 10.1251L13.6572 12.1974L11.5849 10.1251C11.0757 9.61593 10.2314 9.6268 9.72202 10.1361C9.2127 10.6455 9.20183 11.4898 9.71097 11.999L11.7833 14.0713L9.71097 16.1437C9.20183 16.6528 9.2127 17.4972 9.72202 18.0065C10.2314 18.5159 11.0757 18.5267 11.5849 18.0176L13.6572 15.9452L15.7296 18.0176C16.2387 18.5267 17.0831 18.5159 17.5924 18.0065C18.1018 17.4972 18.1126 16.6528 17.6035 16.1437Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="cart__item">
          <div class="item__left">
            <img
              class="item__image"
              src="@/assets/images/item-image.jpg"
              alt="item-image"
            />
            <div class="cartitem__description">
              <h4 class="item__title">ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</h4>
              <p class="item__subtitle">
                Кальмары, мидии, креветки, сыр маасдам, красный лук, микс
                оливок, базилик, соус песто
              </p>
            </div>
          </div>
          <div class="item__right">
            <div class="item__counter">
              <div class="counter__minus">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13.9718" cy="13.972" r="13.486" fill="#72A479" />
                  <path
                    d="M8 13.8999C8 13.0715 8.67157 12.3999 9.5 12.3999H18.5C19.3284 12.3999 20 13.0715 20 13.8999V13.8999C20 14.7284 19.3284 15.3999 18.5 15.3999H9.5C8.67157 15.3999 8 14.7284 8 13.8999V13.8999Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>1</span>
              <div class="counter__plus">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.0719" cy="13.972" r="13.486" fill="#72A479" />
                  <g clip-path="url(#clip0_0_1)">
                    <path
                      d="M18.2771 12.6967H15.3463V9.766C15.3463 9.04596 14.7416 8.45658 14.0213 8.45658C13.301 8.45658 12.6962 9.04596 12.6962 9.766V12.6967H9.76547C9.04544 12.6967 8.45605 13.3015 8.45605 14.0218C8.45605 14.7421 9.04544 15.3469 9.76547 15.3469H12.6962V18.2776C12.6962 18.9976 13.301 19.587 14.0213 19.587C14.7416 19.587 15.3463 18.9976 15.3463 18.2776V15.3469H18.2771C18.9971 15.3469 19.5865 14.7421 19.5865 14.0218C19.5865 13.3015 18.9971 12.6967 18.2771 12.6967Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1">
                      <rect
                        width="11.1304"
                        height="11.1304"
                        fill="white"
                        transform="translate(8.45605 8.45658)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="item__price">1640 ₽</div>
            <div class="item__delete-btn">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="13.7285"
                  cy="14.0721"
                  r="13.486"
                  transform="rotate(45 13.7285 14.0721)"
                  fill="#72A479"
                />
                <path
                  d="M17.6035 16.1437L15.5311 14.0713L17.6035 11.999C18.1126 11.4898 18.1018 10.6455 17.5924 10.1361C17.0831 9.6268 16.2387 9.61593 15.7296 10.1251L13.6572 12.1974L11.5849 10.1251C11.0757 9.61593 10.2314 9.6268 9.72202 10.1361C9.2127 10.6455 9.20183 11.4898 9.71097 11.999L11.7833 14.0713L9.71097 16.1437C9.20183 16.6528 9.2127 17.4972 9.72202 18.0065C10.2314 18.5159 11.0757 18.5267 11.5849 18.0176L13.6572 15.9452L15.7296 18.0176C16.2387 18.5267 17.0831 18.5159 17.5924 18.0065C18.1018 17.4972 18.1126 16.6528 17.6035 16.1437Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
   <div class="cart__add-title">ДОБАВИТЬ К ЗАКАЗУ</div>
      <div class="cart__add">
        <div class="cart__add-items">
          <CartAdd />
          <CartAdd />
          <CartAdd />
          <CartAdd />
        </div>
        <hr />
      </div>




      <div class="cart__price">
        <div class="cart__price-item">
          <b class="cart__price-finish">Итого: <span>500 ₽</span> </b>
          <div class="cart__price-delivery">
            До бесплатной доставки не хватет: <span>100 ₽</span>
          </div>
          <span class="cart__price-min">Минимальная сумма заказа 1500 ₽</span>
        </div>
        <Button class="cart__price-btn" className="btn" text="Оформить заказ" />
      </div>
    </div>
  </main>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import CartAdd from "@/components/Cart/CartAdd.vue";

export default {
  components: { Button, CartAdd,},
};
</script>

<style lang="scss" scoped>
hr {
  position: relative;
  top: 40px;
  left: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>