<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="acaoDeLogin">
        <div class="input-group">
          <label for="username">Usuário</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="input-group">
          <label for="password">Senha</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p class="create-account">
        Não tem uma conta?<br> Contate seu administrador para criar uma!<br>
        <a href="#" @click.prevent="mostrarModalDeCriarConta">Crie uma conta</a>
      </p>
    </div>

    <!-- Modal para criar conta (simplificado) -->
    <CriarContaModal 
     v-model="mostrarModal"
    />
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CriarContaModal from '~/components/modais/CriarContaModal.vue'

const username = ref('')
const password = ref('')
const mostrarModal = ref(false)

const acaoDeLogin = () => {
  // Implemente a lógica de login aqui
  console.log('Login:', username.value, password.value)
}

const mostrarModalDeCriarConta = () => {
  mostrarModal.value = true
}

</script>

<style scoped>
.login-container {
  background-image: url('~/assets/church.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.create-account {
  text-align: center;
  margin-top: 1rem;
}

:global(body), :global(html) {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>