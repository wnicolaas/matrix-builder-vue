<template>
  <div class="container">
    <p class="title">{{title}}</p>
    <div class="button activate-button">Activate</div>
  </div>
</template>

<script>
export default {
  name: "DesignLink",
  data() {
    return {
      title: "#1 - Placeholder Title"
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