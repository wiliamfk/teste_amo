<script setup>
import Navbar from '@/components/Navbar.vue';
import PgFooter from '@/components/PgFooter.vue';
import ShopCart from './components/ShopCart.vue';
import { ref } from 'vue';
import { computed } from 'vue';
import state from './state/eventBus';

const showCart = computed(() => state.showCart);

function closeCart() {
  state.showCart = false;
}
</script>

<template>
  <div class="container">
    <Navbar />
    <div class="main">
      <div class="router">
        <router-view></router-view>
      </div>
      <PgFooter />
    </div>
    <ShopCart :is-visible="showCart" />
  </div>  
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    flex-grow: 1;
    max-height: 91vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .router {
    flex-grow: 1;
    padding: 0.5rem 11vw;
  }
</style>