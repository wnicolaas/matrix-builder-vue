<template>
  <modal-light-box v-if="showDeleteModal" @close="showDeleteModal = false">
    <h2>Delete Design</h2>
    <p>Are you sure you want to delete this design: {{designToBeDeleted.title}}?</p>
    <div class="button-container">
      <div class="button" @click="showDeleteModal = false">Cancel</div>
      <div class="button delete" @click="deleteDesign()">Delete</div>
    </div>
  </modal-light-box>

  <modal-light-box v-if="showActivateModal" @close="showActivateModal = false">
    <h2>Activate design?</h2>
    <p>Do you wish to activate design '{{activateDesign.title}}'?</p>
    <div class="button-container">
      <div class="button cancel" @click="showActivateModal = false">Cancel</div>
      <div class="button" @click="activate(activateDesign.id)">Activate</div>
    </div>
  </modal-light-box>

  <h2 class="header-h2">Designs</h2>
  <DesignCard v-for="design in getDesigns()" @activate="openActivateModal($event)" @delete="openDeleteModal($event)" :design="design"></DesignCard>
</template>

<script>
import DesignCard from "@/components/design-card/DesignCard.vue";
import ModalLightBox from "@/components/modal/ModalLightBox.vue";
import {getDesignById, getDesigns} from "@/utils/randomData";

export default {
  name: "DesignsView",
  data() {
    return {
      showActivateModal: false,
      activateDesign: null,
      showDeleteModal: false,
      designToBeDeleted: null,
    }
  },
  methods: {
    getDesigns() {
      return getDesigns()
    },
    openDeleteModal(design) {
      this.designToBeDeleted = design;
      this.showDeleteModal = true;
    },
    openActivateModal(design) {
      this.activateDesign = design;
      this.showActivateModal = true;
    },
    deleteDesign() {
      console.log('deleting ' + this.designToBeDeleted.title + '!');
      this.showDeleteModal = false;
    },
    activate(id) {
      console.log('Activating design with id: ' + id);
      this.showActivateModal = false;
    }
  },
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

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}
</style>