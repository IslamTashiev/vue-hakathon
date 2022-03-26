<template>
<form @submit.prevent="handleSubmit">
    <input v-model="email" type="email" required placeholder="Электронный адрес">
    <input v-model="password" type="password" required placeholder="Пароль">
   <Button text="Войти" class="signup__btn"/>
</form>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import { ref } from '@vue/reactivity';
export default {
  components: {Button},
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log({ email, password });
    };
    return { handleSubmit, email, password };
  },
};

</script>

<style>

</style>