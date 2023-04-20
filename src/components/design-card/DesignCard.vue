<template>
  <div class="container">
    <div class="card">
      <div class="inner-card">
        <div class="icon-group">
          <div class="icon-button delete" @click="deleteDesign" v-if="$store.state.isLoggedIn">
            <IconTrashCan></IconTrashCan>
          </div>
          <div class="icon-button edit" @click="this.$router.push({ path: '/builder/' + design.id })">
            <IconPencil></IconPencil>
          </div>
        </div>
        <MatrixGrid :design-values="design.valuesRows" :is-editable="false" :node-size-px="3" :node-margin-px="1"/>
      </div>
      <div class="bottom-content">
        <p class="design-name">{{design.title}}</p>
        <div class="button" @click="this.$emit('activate', design)">Activate</div>
      </div>
    </div>
  </div>
</template>

<script>
import MatrixGrid from "@/components/matrix-grid/MatrixGrid.vue";
import IconTrashCan from "@/components/icons/IconTrashCan.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
import {Design} from "@/models/Design";
import ModalLightBox from "@/components/modal/ModalLightBox.vue";

export default {
  name: "DesignCard",
  components: {ModalLightBox, IconPencil, IconTrashCan, MatrixGrid},
  props: {
    design: {
      type: Design,
      required: true
    }
  },
  methods: {
    deleteDesign() {
      this.$emit('delete', this.design);
    }
  }
}
</script>

<style scoped>
.container {
  display: inline-block;
  margin: 25px 25px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8F8F8F;
  padding: 20px 20px 0;
  border-radius: 5px;
}

.inner-card {
  position: relative;
  background-color: #2C2C2C;
  padding: 60px 20px;
}

.design-name {
  color: #FFFFFF;
  font-size: 20px;
}

.icon-group {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
}

.bottom-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>