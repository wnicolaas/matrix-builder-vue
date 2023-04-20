<template>
  <div class="logs-container">
    <h1>Logs</h1>
    <ul v-if="$store.state.isLoggedIn">
      <li v-for="log in getLogs()" :key="log">
        <div class="log">{{ log }}</div>
      </li>
    </ul>
    <div v-else>You must be logged in to view logs!</div>
  </div>
</template>

<script>
import {getLogs} from "@/utils/randomData";

export default {
  name: "LogsView",
  methods: {
    getLogs() {
      return getLogs();
    }
  }
}
</script>

<style scoped>
.logs-container {
  background-color: #4B4B4B;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.logs-container h1 {
  color: #3AE374;
}

.logs-container ul {
  list-style: none;
  padding: 0;
}

.logs-container li {
  margin-bottom: 10px;
}

.log {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  display: inline-block;
  padding: 10px;
  text-align: left;
  width: 800px;
}
</style>