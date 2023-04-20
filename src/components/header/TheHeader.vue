<template>
<div class="header">
  <div class="title">
    <router-link to="/" class="title-link">MATRIX builder</router-link>
  </div>
  <div class="header-content">
    <div class="links">
      <router-link class="link" to="/builder">Design Builder</router-link>
      <router-link class="link" to="/designs">Designs</router-link>
      <router-link class="link" to="logs">Logs</router-link>
    </div>
    <div class="account">
      <img class="account-image" src="../../assets/icons/account.svg"/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  background-color: #2C2C2C;
  width: 100%;
  height: 75px;
  display: flex;
}

.title {
  padding: 18px;
  width: 30%;
}

.title-link {
  font-family: "Mode Seven", sans-serif;
  color: #3AE374;
  font-size: 30pt;
  text-decoration: none;
}

.header-content {
  width:70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.links {
  justify-content: space-between;
  display: flex;
}

.link {
  margin: 0 50px;
  color: white;
  font-size: 20pt;
  cursor: pointer;
  text-decoration: none;
}

.link:hover {
  color: #3AE374;
}

.account {
  margin-left: 200px;
}

.account-image {
  max-width: 40px;
  margin: 10px;
  cursor: pointer;
  filter: invert(100%);
}

.account-image:hover {
  filter: invert(87%) sepia(56%) saturate(1469%) hue-rotate(63deg) brightness(101%) contrast(78%);
}

</style>