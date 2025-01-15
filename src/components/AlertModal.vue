<script setup>
const props = defineProps({
  isVisible: { type: Boolean, default: false },
  message: { type: String, default: '' }
});
</script>

<template>
  <transition name="fade">
    <div v-if="isVisible" class="md-alert">
      <p class="md-msg">{{ message }}</p>
    </div>
  </transition>
</template>

<style scoped>
.md-alert {
  background-color: #343434;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 35vw;
  height: 10vh;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  opacity: 1;
}

.md-msg {
  color: #ffffff;
  font-size: 14pt;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>