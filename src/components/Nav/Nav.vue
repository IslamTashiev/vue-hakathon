<template>
<nav class="nav">
    <div class="container">
        <ul class="nav__menu">
            <li 
                v-for="(item,index) in navItems" 
                :key="item" class="nav__menu_item" 
                :class="{active: index === activeItem}"
                @click="handleActiveItem(index)"
            >
                {{item}}
            </li>
            
        </ul>
    </div>
</nav>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

    setup() {
        const navItems = ["Холодные закуски","Горячие закуски","Мясные блюда","Супы","Рыбные блюда","Гриль меню","Фирменные блюда","Напитки"]
        const activeItem = ref(0)

        const handleActiveItem = (index) => {
            activeItem.value = index
        }
        return {
            navItems,
            activeItem,
            handleActiveItem
        }
    }

}
</script>

<style>

</style>