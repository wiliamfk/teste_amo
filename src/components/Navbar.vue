<script setup>
import state from '@/state/eventBus';

function openCart() {
  state.showCart = true;
}
</script>

<template>
  <div class="header">
    <router-link class="link" to="/"><font-awesome-icon icon="bag-shopping" size="3x" /></router-link>
    <div class="pn-search">
      <div class="input-container">
        <input type="text" name="txtSearch" id="txtSearch" placeholder="Busca...">
        <button class="btn-search"><font-awesome-icon icon="magnifying-glass" id="icoSearch" /></button>
      </div>
    </div>
    <button @click="openCart" class="btn-cart"><font-awesome-icon icon="cart-shopping" size="3x" /></button>
  </div>
</template>

<style scoped>
.header {
  color: #ffffff;
  background: #2F69FF;
  height: 9vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  column-gap: 0.5rem;
  padding-left: 11vw;
  padding-right: 11vw;
}

.link {
  color: #ffffff;
}

.pn-search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 9vw;
}

.input-container {
  width: 100%;
  background-color: #ffffffbb;
  padding: 7px 10px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
}

.btn-search {
  background: none;
  border: none;
  color: #474747;
  cursor: pointer;
}

.btn-cart {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

#txtSearch {
  width: 95.7%;
  /* margin-right: 10px; */
  background: none;
  border: none;
  color: #434343;
  font-size: 12pt;
}

#txtSearch:focus {
  outline: none;
}

#txtSearch::placeholder {
  color: #676767;
}

#icoSearch {
  font-size: 1.5rem;
}
</style>