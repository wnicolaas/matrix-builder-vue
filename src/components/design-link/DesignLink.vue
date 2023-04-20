<template>
  <div class="container">
    <p class="title">{{design.title}}</p>
    <div class="button activate-button" @click="activate">Activate</div>
  </div>
</template>

<script>
import {Design} from "@/models/Design";

export default {
  name: "DesignLink",
  props: {
    design: {
      type: Design,
      required: true
    }
  },
  methods: {
    activate() {
      this.$emit('onActivate', this.design);
    }
  }
}
</script>

<style scoped>
.container {
  border-bottom: 2px solid #6D6D6D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 400px;
}

.title {
  color: #FFFFFF;
  font-size: 20px;
  margin-left: 5px;
}

.activate-button {
  margin-right: 25px;
}
</style>