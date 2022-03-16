<template>
    <div class="container">
        <Title title="ХОЛОДНЫЕ ЗАКУСКИ" /> 
    </div>
    <div class="product__list">
        <ProductItem />
    </div>
</template>

<script>
import Title from "@/components/Title/Title"
import ProductItem from "./ProductItem"
import { ref } from '@vue/reactivity'
export default {
    components: {Title,ProductItem},
    setup() {
        const products = ref([])

        return{

        }
    }
}
</script>

<style>

</style>