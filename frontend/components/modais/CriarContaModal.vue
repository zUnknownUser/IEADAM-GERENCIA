<template>
  <div v-if="modelValue" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h3>Criar Conta (Apenas Admin)</h3>
        <button class="close-button" @click="$emit('update:modelValue', false)">&times;</button>
      </div>
      <div class="modal-content">
        <form @submit.prevent="acaoDeCriarConta">
          <div class="form-group">
            <label for="nomeCompleto">Nome e sobrenome</label>
            <input type="text" id="nomeCompleto" v-model="nomeCompleto" required>
          </div>
          <div class="form-group">
            <label for="username">Nome de usuário</label>
            <input type="text" id="username" v-model="username">
          </div>
          <div class="form-group" :class="{ 'invalid': senhaFoiTocada && !senhaValida, 'valid': senhaValida }">
            <label for="password">Senha:</label>
            <input
            type="password"
            id="password"
            v-model="password"
            @input="verificarSenhas" 
            @focus="senhaFoiTocada = true"
            required>
            <ul class="requisitos" v-if="senhaFoiTocada">
              <li :class="{ 'valid': temOitoCaracteres }">Mínimo 8 caracteres</li>
              <li :class="{ 'valid': temLetrasENumeros }">Letras e números</li>
              <li :class="{ 'valid': temCaracteresEspeciais }">Caracteres especiais</li>
            </ul>
          </div>
          <div class="form-group" :class="{ 'invalid': confirmSenhaFoiTocada && !senhasCoincidentes, 'valid': senhasCoincidentes }">
            <label for="confirmPassword">Confirme sua senha:</label>
            <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            @input="verificarSenhas" 
            @focus="confirmSenhaFoiTocada = true"
            required>
            <p v-if="mostrarErroSenhasNaoCoincidem" class="erro-mensagem">As senhas não coincidem</p>
          </div>
          <button type="submit" class="submit-button">Criar Conta</button>
        </form>
      </div>
    </div>
  </div>

  <ModalAdm v-model="modalAdmValue" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ModalAdm from './ModalAdm.vue';

defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const nomeCompleto = ref('')
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const senhaFoiTocada = ref(false);
const confirmSenhaFoiTocada = ref(false);
const mostrarErroSenhasNaoCoincidem = ref(false)
const modalAdmValue = ref(false)

const temOitoCaracteres = computed(() => password.value.length >= 8);
const temLetrasENumeros = computed(() => /[a-zA-Z]/.test(password.value) && /[0-9]/.test(password.value));
const temCaracteresEspeciais = computed(() => /[!@#$%^&*(),.?":{}|<>]/.test(password.value));

const senhaValida = computed(() => temOitoCaracteres.value && temLetrasENumeros.value && temCaracteresEspeciais.value);
const senhasCoincidentes = computed(() => password.value === confirmPassword.value && password.value !== '');

const acaoDeCriarConta = () => {
  modalAdmValue.value = true
  console.log('Criando conta com:', { username: username.value, password: password.value })

  const permissao = false;
  // Após criar a conta, você pode fechar o modal:
  if(permissao) {
    emit('update:modelValue', false)
  }
}

const verificarSenhas = () => {
  if (confirmSenhaFoiTocada.value) {
    mostrarErroSenhasNaoCoincidem.value = !senhasCoincidentes.value;
  }
};

watch(confirmPassword, () => {
  if (confirmSenhaFoiTocada.value) {
    mostrarErroSenhasNaoCoincidem.value = !senhasCoincidentes.value;
  }
});


</script>

<style scoped>
.modal-overlay {
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

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
  margin-right: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 3px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-group.invalid input {
  border-color: red;
}

.form-group.valid input {
  border-color: green;
}

.requisitos {
  list-style-type: none;
  padding-left: 0;
  font-size: 0.8em;
  color: red;
}

.requisitos li.valid {
  color: green;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.erro-mensagem {
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
}
</style>