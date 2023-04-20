<template>

  <modal-light-box v-if="showLoginModal" @close="showLoginModal = false">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="container">
        <div class="input-container">
          <label for="username">Username:</label>
          <input id="username" v-model="username" required />
        </div>

        <div class="input-container">
          <label for="password">Password:</label>
          <input id="password" type="password" v-model="password" required />
        </div>

        <div @click="login" class="button">Login</div>
      </div>
    </form>
  </modal-light-box>

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
      <img class="account-image" @click="showLoginModal = true" src="../../assets/icons/account.svg"/>
    </div>
  </div>
</div>
</template>

<script>
import ModalLightBox from "@/components/modal/ModalLightBox.vue";

export default {
  name: "Header",
  components: {ModalLightBox},
  data() {
    return {
      showLoginModal: false,
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('login');
    }
  }
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

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input-container {
  margin: 10px 0;
}

</style>