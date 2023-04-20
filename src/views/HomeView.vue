<template>
  <div class="status-container">
    <p class="status-text">Raspberry Status: </p>
    <p class="status-text status">{{status}} ●</p>
  </div>
  <div class="main-content">
    <div class="left-content">
      <h1 class="header-h1">Recent Designs</h1>
      <div class="recent-designs">
        <design-link style="border-top: 2px solid #6D6D6D"/>
        <design-link/>
        <design-link/>
        <design-link/>
      </div>

      <h1 class="header-h1" style="margin-top: 50px">Logs</h1>
      <div class="logs">
        <p class="log" style="border-top: 1px solid #6D6D6D; padding-top: 4px;">17:35 - Done uploading test-green.png!</p>
        <p class="log">17:35 - Uploading test-green.png...</p>
        <p class="log">14:28 - Done uploading hello-world.png!</p>
        <p class="log">14:27 - Uploading hello-world.png...</p>
        <p class="log">12:11 - Activating previous design (rainbow.png)</p>
        <p class="log">12:10 - Raspberry is live!</p>
        <p class="log">12:09 - Starting up Raspberry...</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="right-content">
      <h1 class="header-h1">Currently Displaying:</h1>
      <div class="grid">
        <MatrixGrid :is-editable="false" :node-size-px="5" :node-margin-px="2"/>
      </div>
      <p class="active-grid-name">#2 - Test black</p>
      <div class="button">Edit</div>
    </div>
  </div>
</template>

<script>
import DesignLink from "@/components/design-link/DesignLink.vue";
import MatrixGrid from "@/components/matrix-grid/MatrixGrid.vue";

export default {
  name: "HomeView",
  components: {MatrixGrid, DesignLink},
  data() {
    return {
      status: 'Online' // TODO : should only show logs & can only delete when online
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
</style>