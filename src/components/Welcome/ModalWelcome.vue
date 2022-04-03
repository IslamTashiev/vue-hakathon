<template>
  <div class="wrapper">
    <div class="welcome">
      <div class="container">
        <slot></slot>
        <div class="welcome__description">
          <div class="welcome__item">
            <div v-if="showForm">
              <button
                class="cart__bt-close btn__welcome"
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L15 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 1L1 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <img
                class="welcome__image"
                src="@/assets/images/1.jpg"
                alt="item-image"
              />
              <h2 class="welcome__title">Регистрация</h2>
              <SignUpForm @successSignup="enterChat" />
              <p class="welcome__subtitle">
                Есть аккаунт?
                <span @click="showForm = false">Вход</span>
              </p>
            </div>
            <div v-else>
              <button
                class="cart__bt-close btn__welcome"
                @submit.prevent="closeModal"
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L15 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 1L1 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <img
                class="welcome__image"
                src="@/assets/images/1.jpg"
                alt="item-image"
              />
              <h2 class="welcome__title welcome__title-back">Вход на сайт</h2>
              <Login @successLogin="enterChat" />
              <p class="welcome__subtitle">
                У вас еще нет аккаунта?
                <span @click="showForm = true">Зарегистрироваться</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SignUpForm from "@/components/Welcome/SignUp";
import Login from "@/components/Welcome/Login";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  components: { SignUpForm, Login },
  setup(props, context) {
    const router = useRouter();

    const enterChat = () => {
      context.emit("successLogin");
      router.push("/");
    };
    const showForm = ref(false);

    // const close = async () => {
    //   if (!error.value) {
    //     context.emit("close");
    //     isModalInfoVisible = ref(false)
    //   } else {
    //     console.log(error.value);
    //   }
    // };

    return {
      enterChat,
      showForm,
      // close,
    };
  },
};
</script>

<style scoped>
.btn__welcome {
  position: relative;
  top: -190px;
  left: 280px;
}
</style>