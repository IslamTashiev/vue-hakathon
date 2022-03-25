<template>
<form @submit.prevent="handleSubmit">
    <input v-model="email" type="email" required placeholder="Email">
    <input v-model="password" type="password" required placeholder="Password">
   <Button text="Log In" class="signup__btn"/>
</form>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
export default {
  components: {Button},
};

</script>

<style>

</style>