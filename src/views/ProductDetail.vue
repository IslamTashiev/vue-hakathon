<template>
<div class="wrapper">
    <Header />
    <main>
        <ProductDetail />
        <ProductList className="long" title="С ЭТИМ ТОВАРОМ ПОКУПАЮТ" />
    </main>
    <Footer />

</div>
</template>

<script>
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import ProductDetail from "@/components/ProductDetail/ProductDetail"
import ProductList from "@/components/ProductList/ProductList"
export default {
    components: {Header,Footer,ProductDetail,ProductList}
}
</script>

<style>

</style>