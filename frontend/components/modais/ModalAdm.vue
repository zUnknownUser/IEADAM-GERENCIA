<template>
<div v-if="modelValue" class="adm-container">
    <div class="adm-box">
      <h2>Autorização necessária!</h2>
      <form @submit.prevent="acaoDeadm">
        <div class="input-group">
          <label for="username">Usuário</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="input-group">
          <label for="password">Senha</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="button-container"> 
        <button type="submit" class="confirmar">Confirmar</button>
        <button type="button" @click="$emit('update:modelValue', false)" class="cancelar">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  modelValue: Boolean
});

const emit = defineEmits(['update:modelValue'])

const username = ref('')
const password = ref('')

const acaoDeadm = () => {

}

</script>

<style scoped>
.adm-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.adm-box {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
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

.button-container {
  display: flex;
  gap: 10px; /* Espaço entre os botões */
  margin-top: 15px; /* Espaço acima dos botões */
}

button {
  flex: 1;
  padding: 15px 10px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  font-size: 14px; /* Ajusta o tamanho da fonte */
  font-weight: bold; /* Torna o texto mais visível */
  text-transform: uppercase;
}

button:hover {
  opacity: 0.8;
}

.confirmar {
  background-color: #28a745;
}

.cancelar {
  background-color: #dc3545;
}

.create-account {
  text-align: center;
  margin-top: 1rem;
}

</style>