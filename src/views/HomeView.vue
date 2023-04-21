<template>
  <modal-light-box v-if="showActivateModal" @close="showActivateModal = false">
    <h2>Activate design?</h2>
    <p>Do you wish to activate design '{{modalDesign.title}}'?</p>
    <div class="button-container">
      <div class="button cancel" @click="showActivateModal = false">Cancel</div>
      <div class="button" @click="activate(modalDesign.id)">Activate</div>
    </div>
  </modal-light-box>


  <div class="status-container">
    <p class="status-text">Raspberry Status: </p>
    <p class="status-text status">{{status}} ●</p>
  </div>
  <div class="main-content">
    <div class="left-content">
      <h1 class="header-h1">Recent Designs</h1>
      <div class="recent-designs">
        <design-link class="design-link" v-for="design in getDesigns()" @onActivate="openActivateModal($event)" :design="design"/>
      </div>

      <h1 class="header-h1" style="margin-top: 50px">Logs</h1>
      <div class="logs" v-if="$store.state.isLoggedIn">
        <p class="log" v-for="log in getLogs()">{{log}}</p>
      </div>
      <p v-else class="warning">You need to be logged in to view logs!</p>
    </div>
    <div class="divider"></div>
    <div class="right-content">
      <h1 class="header-h1">Currently Displaying:</h1>
      <div class="grid">
        <MatrixGrid :design-values="activeDesign.valuesRows" key="home-preview" :is-editable="false" :node-size-px="5" :node-margin-px="2"/>
      </div>
      <p class="active-grid-name">{{activeDesign.title}}</p>
      <div class="button" @click="this.$router.push({ path: '/builder/' + activeDesign.id });">Edit</div>
    </div>
  </div>
</template>

<script>
import DesignLink from "@/components/design-link/DesignLink.vue";
import MatrixGrid from "@/components/matrix-grid/MatrixGrid.vue";
import {getDesignById, getDesigns, getLogs} from "@/utils/randomData";
import ModalLightBox from "@/components/modal/ModalLightBox.vue";

export default {
  name: "HomeView",
  components: {ModalLightBox, MatrixGrid, DesignLink},
  data() {
    return {
      status: 'Online', // TODO : should only show logs & can only delete when logged in
      showActivateModal: false,
      modalDesign: null,
      activeDesign: getDesignById(3)
    }
  },
  methods: {
    getDesigns() {
      return getDesigns().slice(0, 4);
    },
    getLogs() {
      return getLogs().slice(0, 7);
    },
    openActivateModal(design) {
      this.modalDesign = design;
      this.showActivateModal = true;
    },
    activate(id) {
      console.log('Activating design with id: ' + id);
      this.activeDesign = getDesignById(id);
      this.showActivateModal = false;
    }
  },
  provide() {
    return {
      providedIsDragging: false,
      fillColor: ''
    }
  }
}
</script>

<style scoped>
.status-text {
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
  color: #FFFFFF;
}

.status {
  color: #3AE374;
}

.status-container {
  display: flex;
}

.main-content {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
}

.left-content, .right-content {
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-h1 {
  color: #FFFFFF;
  margin-bottom: 50px;
  font-weight: normal;
}

.recent-designs {
  width: 80%;
}

.logs {
  width: 80%;
}

.log:first-child {
  border-top: 1px solid #6D6D6D; padding-top: 4px;
}

.log {
  color: #FFFFFF;
  font-size: 18px;
  border-bottom: 1px solid #6D6D6D;
  margin: 0;
  padding: 2px 0;
}

.divider {
  width: 1px;
  background-color: #8F8F8F;
}

.grid {
  background-color: #2C2C2C;
  padding: 8px;
}

.active-grid-name {
  color: #FFFFFF;
  font-size: 20px;
  margin-top: 50px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.design-link:first-child {
  border-top: 2px solid #6D6D6D;
}

.warning {
  color: #FFFFFF;
  font-size: 18px;
}
</style>