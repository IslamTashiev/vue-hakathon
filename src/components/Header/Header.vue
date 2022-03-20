<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="burger__menu">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.64 25.3871H7.836L4.836 30.3551L1.836 25.3871H1.044V33.7871H1.68V26.3231L4.788 31.4831H4.896L8.004 26.3231V33.7871H8.64V25.3871ZM11.3597 33.1871V29.8511H15.1997V29.2511H11.3597V25.9871H15.4997V25.3871H10.7237V33.7871H15.5597V33.1871H11.3597ZM22.6421 25.3871V29.1671H17.7581V25.3871H17.1221V33.7871H17.7581V29.7671H22.6421V33.7871H23.2781V25.3871H22.6421ZM31.9844 25.2551C29.6924 25.2551 27.9044 26.9711 27.7004 29.1671H25.9964V25.3871H25.3604V33.7871H25.9964V29.7671H27.6764C27.7724 32.0831 29.6084 33.9191 31.9844 33.9191C34.4084 33.9191 36.3164 31.9871 36.3164 29.5871C36.3164 27.1871 34.4084 25.2551 31.9844 25.2551ZM31.9844 33.3071C29.8964 33.3071 28.2884 31.6511 28.2884 29.5871C28.2884 27.5231 29.8964 25.8671 31.9844 25.8671C34.0604 25.8671 35.6804 27.5231 35.6804 29.5871C35.6804 31.6511 34.0604 33.3071 31.9844 33.3071Z"
              fill="white"
            />
            <rect x="5" y="14" width="25" height="3" rx="1.5" fill="#65906C" />
            <rect x="5" y="7" width="25" height="3" rx="1.5" fill="#65906C" />
            <rect x="5" width="25" height="3" rx="1.5" fill="#65906C" />
          </svg>
        </div>
         <router-link :to="'/'">
        <div class="logo">
          LOGOS
          </div>
          </router-link>
        <div class="header__cearch-bar">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.23914 10.3913C4.25354 6.15071 7.7029 2.72471 11.9435 2.73912C16.1841 2.75353 19.6101 6.20288 19.5957 10.4435V10.5304C19.5435 13.2869 18.0044 15.8348 16.1174 17.8261C15.0382 18.9467 13.8331 19.9388 12.5261 20.7826C12.1766 21.0849 11.6582 21.0849 11.3087 20.7826C9.3602 19.5143 7.65007 17.9131 6.25653 16.0522C5.01449 14.4294 4.3093 12.4597 4.23914 10.4174L4.23914 10.3913Z"
              stroke="#CFCFCF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="11.9174"
              cy="10.5391"
              r="2.46087"
              stroke="#CFCFCF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" placeholder="Введите адрес доставки" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11.7666"
              cy="11.7666"
              r="8.98856"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0183 18.4851L21.5423 22"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="header__info">
          <div class="info__contact">
            <div class="contact__icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.99329 3.249C2.20417 2.89915 3.36678 1.62917 4.19526 1.66751C4.44311 1.68873 4.66222 1.83798 4.84024 2.01187H4.84092C5.249 2.4117 6.41982 3.92062 6.48555 4.23829C6.64782 5.01739 5.7187 5.46651 6.00284 6.25178C6.72725 8.02428 7.97544 9.27236 9.74879 9.99602C10.5334 10.2808 10.9826 9.35246 11.7618 9.51404C12.0795 9.58045 13.5892 10.7505 13.9884 11.1592V11.1592C14.1616 11.3365 14.3123 11.5563 14.3328 11.8041C14.3636 12.677 13.0148 13.8553 12.7518 14.0059C12.1315 14.4502 11.3222 14.442 10.3356 13.9833C7.58243 12.8379 3.1826 8.52132 2.01588 5.66437C1.56946 4.6833 1.53934 3.86859 1.99329 3.249Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.71027 1.83331C12.1783 2.10731 14.1269 4.05398 14.4043 6.52131"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.71027 4.19531C10.8903 4.42531 11.8123 5.34731 12.0423 6.52731"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="contacts">
              <span>Контакты:</span>
              <h4 class="contact__phone">+7 (917) 510-57-59</h4>
            </div>
          </div>
          <div class="info__login">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.5788"
                cy="7.27803"
                r="4.77803"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h4>Войти</h4>
          </div>
        </div>
        <div class="header__button">
          <router-link :to="'/cart'">
            <button class="btn header__btn">
              <svg
                width="48"
                height="27"
                viewBox="0 0 48 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="26.5"
                  x2="48"
                  y2="26.5"
                  stroke="white"
                  stroke-opacity="0.3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.4223 19.8203C19.8443 19.8203 20.1873 20.1633 20.1873 20.5853C20.1873 21.0073 19.8443 21.3493 19.4223 21.3493C19.0003 21.3493 18.6583 21.0073 18.6583 20.5853C18.6583 20.1633 19.0003 19.8203 19.4223 19.8203Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.6747 19.8203C31.0967 19.8203 31.4397 20.1633 31.4397 20.5853C31.4397 21.0073 31.0967 21.3493 30.6747 21.3493C30.2527 21.3493 29.9097 21.0073 29.9097 20.5853C29.9097 20.1633 30.2527 19.8203 30.6747 19.8203Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.7499 3.25L16.8299 3.61L17.7929 15.083C17.8709 16.018 18.6519 16.736 19.5899 16.736H30.5019C31.3979 16.736 32.1579 16.078 32.2869 15.19L33.2359 8.632C33.3529 7.823 32.7259 7.099 31.9089 7.099H17.1639"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.1254 10.795H28.8984"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              Корзина
              <div></div>
              <span>4</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>