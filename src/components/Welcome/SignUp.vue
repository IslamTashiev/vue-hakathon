<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="name" type="text" required placeholder="Имя пользователя" />
    <input
      v-model="email"
      type="email"
      required
      placeholder="Электронный адрес"
    />
    <input v-model="password" type="password" required placeholder="Пароль" />
    <Button text="Регистрация" class="signup__btn" />
  </form>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss">
// .signup{
//       &__btn {
//     padding: 21px 30px;
//   }
// }
</style>