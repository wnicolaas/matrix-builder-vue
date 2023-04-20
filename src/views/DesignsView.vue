<template>
  <h2 class="header-h2">Designs</h2>
  <DesignCard></DesignCard>
  <DesignCard></DesignCard>
</template>

<script>
import DesignCard from "@/components/design-card/DesignCard.vue";
import ModalLightBox from "@/components/modal/ModalLightBox.vue";

export default {
  name: "DesignsView",
  components: {ModalLightBox, DesignCard},
  provide() {
    return {
      providedIsDragging: false,
      fillColor: ''
    }
  }
}
</script>

<style scoped>
.header-h2 {
  color: #FFFFFF;
  margin-left: 25px;
  text-decoration: none;
}
</style>