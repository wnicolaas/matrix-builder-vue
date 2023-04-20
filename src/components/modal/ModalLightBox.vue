<template>
<div class="overlay" @click="close">
  <div class="modal" @click="$event.stopPropagation()">
    <img src="src/assets/icons/close.svg" alt="close" class="close-btn" @click="close"/>
    <div class="content">
      <slot/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ModalLightBox",
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal {
  position: relative;
  background-color: #8F8F8F;
  min-width: 400px;
  min-height: 200px;
  border-radius: 5px;
  z-index: 999;
}

.close-btn {
  max-width: 40px;
  position: absolute;
  top: 3px;
  right: 3px;
  cursor: pointer;
}

.close-btn:active {
  filter: invert(100%);
}

.content {
  margin: 20px;
}
</style>