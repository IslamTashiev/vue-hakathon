<template>
  <div class="wrapper">
    <div class="welcome">
      <div class="container">
        <div class="welcome__description">
          <div class="welcome__item">

            <div v-if="showForm">
               <img src="@/assets/images/1.jpg" alt="item-image" />
              <h2 class="welcome__title">Get on Board</h2>
              <SignUpForm @successSignup="enterChat" />
              <p class="welcome__subtitle">
                Already registered?
                <span @click="showForm = false">Login</span> instead.
              </p>
            </div>


            <div v-else>

 <img src="@/assets/images/1.jpg" alt="item-image" />
              <h2 class="welcome__title welcome__title-back">
                Hello there, welcome back
              </h2>
              <Login @successLogin="enterChat" />
              <p class="welcome__subtitle">
                No account yet?
                <span @click="showForm = true">Sign up</span> instead.
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
  setup() {
    const router = useRouter();
    const enterChat = () => {
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

<style>
.welcome {
  height: 100vh;
}
.welcome__item {
  text-align: center;
  display: flex;
  justify-content: space-around;
  /* margin: 140px 20px 300px 20px; */
}
.welcome__subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #403c3b;
}
.welcome__title {
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 20px;
  color: #403c3b;
}
.welcome__description {
  width: 90%;
  max-width: 450px;
  /* height: 500px; */
  margin: 80px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
  overflow: hidden;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  outline: none;
  color: #999;
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