<template>
  <div class="wrapper">
    <div class="welcome">
      <div class="container">
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
  setup(props,context) {
    const router = useRouter();

    const enterChat = () => {
     context.emit("successLogin");
      router.push('/');
    };
    const showForm = ref(false);
    return {
      enterChat,
      showForm,
    };
  },
};
</script>

<style lang="scss">
.welcome {
  height: 100vh;
   &__image {
  width: 100%;
  max-width: 200px;
}
&__item {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
&__subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #403c3b;
  padding-bottom: 20px;
}
&__title {
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 20px;
  color: #403c3b;
  margin: 10px 0px 20px 0px;
}

&__description {
  width: 100%;
  max-width: 450px;
  margin: 80px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
  overflow: hidden;
}
}

.welcome form {
width: 100%;
  max-width: 350px;
  margin: 0 auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #403c3b;
  outline: none;
  color: #403c3b;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>