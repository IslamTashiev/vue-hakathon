<template>
    <div class="menu ">
        <ul class="menu__list">
            <li
                class="nav__menu_item"
                v-for="(item,index) in navItems"
                :key="item"
                @click="handleActiveItem(index)"
                :class="{active: activeItem === index}"
            >
                {{item}}
            </li>
        </ul>
        <Contacts  />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

import Contacts from "./Contacts"
export default {
    components: {Contacts},
    setup() {
        const navItems = ["Холодные закуски","Горячие закуски","Мясные блюда","Супы","Рыбные блюда","Гриль меню","Фирменные блюда","Напитки"]
        const activeItem = ref(0)

        const handleActiveItem = (index) => {
           activeItem.value = index
        }

        return{
            navItems,
            activeItem,
            handleActiveItem
        }
    }

}
</script>

<style lang="scss">
.menu{
    position: fixed;
    top: -100%;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #44403F;
    transition: .3s all ease;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 40px;

    &.active{
        top: 0;
    }
    .menu__list{
        border-bottom: 1px solid #666160;
        width: 100%;
        .nav__menu_item{
            margin-bottom: 13px;
            padding: 0;
            font-weight: 500;
            font-size: 24px;
            line-height: 24px;
            color: #fff;
            &.active{
                border: none;
                color: #65906C;
                font-weight: 700;
            }
        }
    }
}
</style>