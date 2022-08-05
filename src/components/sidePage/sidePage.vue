<template>
  <transition name="fade">
    <div v-if="showSide === true" :class="sideClass" class="fixed top-0 left-0">
      <div class="fixed top-1/2 bg-gray-400 w-4/6 h-4/6 letfAb rounded-xl rounded-br-xl">123</div>
    </div>
  </transition>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const showSide = computed(() => store.state.header.sidePage);
    console.log(showSide.value);
    const sideClass = computed(() => store.state.header.showClass); 

    return {
      sideClass,
      showSide
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(0%);
  transition: 0.2s
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
  transition: 0.4s
}

.letfAb {
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>