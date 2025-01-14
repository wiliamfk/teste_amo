<script setup>
  import { useCartStore } from '@/stores/cartStore';
  const product = defineProps(['img', 'id', 'title', 'description', 'price']);

  const obj = {id: product?.id, img: product?.img, title: product?.title, description: product?.description, price: product?.price};
  const cartStore = useCartStore();

  function addProduct() {
    cartStore.addItem(obj);
  }
</script>

<template>
  <div class="pd-card">
    <div class="pn-img">
      <img :src="product?.img" :alt="product?.id">
    </div>
    <div class="pn-info">
      <h5>{{ product?.title }}</h5>
      <p>{{ product?.description }}</p>
      <p class="price">R$ {{ product?.price }}</p>
    </div>
    <div class="pn-comprar">
      <button @click="addProduct"><span class="mr-1"><font-awesome-icon icon="cart-shopping" /></span> Add To Cart</button>
    </div>
  </div>
</template>

<style scoped>
.pd-card {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  width: 21rem;
  height: 30rem;
  border-radius: 7px;
  gap: 0.25rem;
}

.pn-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45%;
}

.pn-img img {
  height: 100%;
}

.pn-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 0.5rem;
  flex-grow: 1;
}

h5, p {
  padding: 0;
  margin: 0;
}

.pn-info h5 {
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
}

.pn-info p {
  font-size: 11pt;
  font-weight: normal;
  text-align: left;
}

.pn-info .price {
  font-size: 15pt;
  color: #474747;
  font-weight: bold;
  text-align: center;
}

.pn-comprar {
  height: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
}

.pn-comprar button {
  background-color: #2F69FF;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 12pt;
  width: 100%;
  height: 100%;
  border-radius: 40px;
}

.pn-comprar button:hover {
  background-color: #474747;
}
 
.mr-1 {
  margin-right: 0.5rem;
}
</style>