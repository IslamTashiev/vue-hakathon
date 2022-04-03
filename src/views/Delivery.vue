<template>
<div class="wrapper">
<Header/>
<Nav/>
<main>
    <div class="delivery__row">
<div class="delivery__conditions">
<Dropdown text="У наших курьеров всегда должна быть сдача!"/>
<Dropdown text="Вам что-то не довезли?"/>
<Dropdown text="Не понравился продукт?"/>
<Dropdown text="Если появились замечания"/>
<Dropdown text="Оплата Visa, MasterCard и МИР"/>
<Dropdown text="Реквизиты"/>
</div>
<Map/>
     </div>
<Time/>
</main>
<Footer/> 
</div>

</template>

<script>
import Header from "@/components/Header/Header.vue"
import Footer from "@/components/Footer/Footer.vue"
import Nav from "@/components/Nav/Nav.vue"
import Dropdown from "@/components/Delivery/Dropdown.vue"
import Map from "@/components/Delivery/Map.vue"
import Time from "@/components/Delivery/Time.vue"

export default {
components:{
    Header,
    Footer,
    Nav,
    Dropdown,
    Map,
    Time
}
}
</script>

<style lang="scss">
main{
    margin-top:30px;
}
.delivery{
    &__row{
        display:flex;
        justify-content: space-between;
    }
}
</style>