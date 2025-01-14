<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

let products = reactive(ref());

onMounted(async () => {
  try {
    let response = await axios.get('https://dummyjson.com/products');
    products.value = await response.data;
    console.log(products.value.products);
  } catch (error) {
    console.error('Erro ao carregar os produtos: ' + error);
  }
});

import CardProduct from '@/components/CardProduct.vue';
</script>

<template>
  <main>
    <div class="pn-options">
      <ul>
        <li>Brand <span class="ml-1"><font-awesome-icon icon="chevron-down" /></span></li>
        <li>Category <span class="ml-1"><font-awesome-icon icon="chevron-down" /></span></li>
        <li>Promotions</li>
      </ul>
    </div>

    <div class="section">
      <div class="content">
        <CardProduct v-for="prod in products?.products" :key="prod.id" :img="prod?.thumbnail" :id="prod?.id"
          :title="prod?.title" :description="prod?.description" :price="prod?.price" />
      </div>
    </div>

  </main>
</template>

<style scoped>
.section {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  padding: auto;
  margin: 0 auto;
  /* Centraliza horizontalmente */
  max-width: fit-content;
  /* Ajusta o tamanho ao conteúdo */
}

.pn-options {
  background-color: #474747;
  height: 6vh;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.pn-options ul {
  color: #ffffff;
  list-style: none;
}

.pn-options li {
  display: inline;
  margin: 0 7vw;
  cursor: pointer;
}

.pn-options li:hover {
  text-decoration: underline;
}

.ml-1 {
  margin-left: 0.3rem;
}
</style>
