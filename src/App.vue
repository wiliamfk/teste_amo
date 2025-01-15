<script setup>
import Navbar from '@/components/Navbar.vue';
import PgFooter from '@/components/PgFooter.vue';
import ShopCart from './components/ShopCart.vue';
import AlertModal from './components/AlertModal.vue';
import { ref, watch } from 'vue';
import { computed } from 'vue';
import state from './state/eventBus';

const showCart = computed(() => state.showCart);
const alertVisible = computed(() => state.alertVisible);
const alertMessage = computed(() => state.alertMessage);

watch(() => state.alertVisible, (newVl) => {
  if (newVl) {
    setTimeout(() => {
      state.alertVisible = false;
    }, 2000);
  }
});

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
    <AlertModal :is-visible="alertVisible" :message="alertMessage" />
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