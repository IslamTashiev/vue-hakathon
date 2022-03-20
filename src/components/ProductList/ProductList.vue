<template>
    <div class="container">
        <Title :title="title" /> 
    </div>
    <div class="product__list">
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script>
import Title from "@/components/Title/Title"
import ProductItem from "./ProductItem"
// :class="{container : !className, [className] : className}"
import {useStore} from "vuex"
import { ref } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
export default {
    components: {Title,ProductItem},
    props: ["title","className"],
    setup() {
        const store = useStore()

        const products = computed(() => store.state.products)
        

        onMounted(() => {
            store.dispatch("getProducts")
        })
        return{
            products
        }
    }
}
</script>

<style>

</style>