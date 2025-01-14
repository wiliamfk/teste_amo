<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const props = defineProps({product: {type: Object, required: true}});
const cartStore = useCartStore();
</script>

<template>
  <div class="c-card">
    <div class="c-pn-img">
      <img class="p-img" :src="product?.img" alt="...">
    </div>
    <div class="c-info">
      <p>{{ product?.title }}</p>
      <p class="t-price">R$ {{ product?.price }}</p>
    </div>
    <div class="c-actions">
      <button @click="() => {cartStore.updateQuantity(product?.id, false)}" class="btn-rmv">-</button>
      <p>{{ product?.quantity }}</p>
      <button @click="() => {cartStore.updateQuantity(product?.id, true)}" class="btn-add">+</button>
    </div>
  </div>
</template>

<style scoped>
.c-card {
  background-color: #ffffff;
  width: 94.5%;
  height: 6rem;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0.75rem;
  gap: 0.5rem;
}

.c-pn-img {
  width: 6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.p-img {
  height: 100%;
}

.c-info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.5rem;
  padding: 0.25rem;
}

.c-actions {
  width: 6rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  gap: 0.25rem;
}

p {
  margin: 0;
  padding: 0;
  font-size: 14pt;
  color: #474747;
  font-weight: bold;
}

.t-price {
  color: #2F69FF;
}

.btn-add, .btn-rmv {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  border: none;
  outline: none;
  font-size: 12pt;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.btn-rmv {
  background-color: #c22626;
}

.btn-add {
 background-color: #259e12;
}

.btn-add:hover, .btn-rmv:hover {
  width: 27px;
  height: 27px;
  font-size: 11pt;
}
</style>