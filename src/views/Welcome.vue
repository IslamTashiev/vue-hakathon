<template>
  <div class="wrapper">
    <div class="welcome">
      <div class="container">
        <router-link to="/" class="go__back">
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
          Вернуться назад
        </router-link>
        <div class="welcome__description">
          <div class="welcome__item">
            <div v-if="showForm">
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
import Login from "../components/Welcome/Login";
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
    return {
      enterChat,
      showForm,
    };
  },
};
</script>

<style scoped>
.go__back {
  position: relative;
  top: 50px;
  left: 50px;
}
</style>