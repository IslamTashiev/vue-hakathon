<template>
    <button :class="{ 'btn': !className, [className]: className }">
    {{ text }}
  </button>
</template>

<script>
export default {
props: ["text","className"]
}
</script>

<style>

</style>