<script setup>
import state from '@/state/eventBus';
import { ref } from 'vue';
import CardCart from './CardCart.vue';
import { useCartStore } from '@/stores/cartStore';

const props = defineProps({
  isVisible: {type: Boolean, default: false}
});

function closeModal() {
  state.showCart = false;
}

const cartStore = useCartStore();
const cartItems = cartStore.cartItems;

const count = cartStore.totalQt;
const totalVl = cartStore.totalVle;
</script>

<template>
  <div v-if="isVisible" class="darkscreen">
    <div class="ext" @click="closeModal"></div>
    <div class="pn-cart">
      <div class="header">
        <div class="hl">
          <p><span><font-awesome-icon icon="cart-shopping" /></span>Carrinho</p>
        </div>
        <font-awesome-icon icon="xmark" id="btnFechar" @click="closeModal" />
      </div>
      <div class="section">
        <div class="cart-items">
          <CardCart v-for="item in cartItems" :key="item.id" :product="item" />
        </div>
        <button @click="closeModal" class="btn-add-item">Add More Products</button>
      </div>
      <div class="footer">
        <div class="fl">
          <p>{{ cartStore.totalQt }} products:</p>
          <p>R$ {{ cartStore.totalVle.toFixed(2) }}</p>
        </div>
        <div class="fr">
          <button class="btn-finish">Finish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.darkscreen {
  position: fixed;
  background-color: #000000aa;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}

.pn-cart {
  background-color: #dcdcdc;
  width: 35vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 0.25rem;
}

.ext {
  height: 100%;
  flex-grow: 1;
}

.header {
  background-color: #2F69FF;
  color: #ffffff;
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.hl {
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hl p {
  text-align: center;
  font-size: 14pt;
}

.hl p span {
  margin-right: 0.5rem;
}

.section {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 0.35rem;
}

.cart-items {
  width: 97%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  max-height: 80vh;
  overflow-y: auto;
}

.btn-add-item {
  background-color: #474747;
  color: #ffffff;
  font-size: 12pt;
  width: 60%;
  height: 2rem;
  border: none;
  border-radius: 40px;
  cursor: pointer;
}

.btn-add-item:hover {
  background-color: #595959;
}

.footer {
  background-color: #474747;
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}

.footer p {
  padding: 0;
  margin: 0;
  font-size: 12pt;
}

.fr, .fl {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

#btnFechar {
  cursor: pointer;
  font-size: 22pt;
}

#btnFechar:hover {
  font-size: 24pt;
}

.btn-finish {
  border: none;
  background-color: #ffffff;
  color: #474747;
  height: 2rem;
  width: 80%;
  border-radius: 40px;
  font-size: 12pt;
}

.btn-finish:hover {
  background-color: #cdcdcd;
  color: #353535;
  cursor: pointer;
}
</style>