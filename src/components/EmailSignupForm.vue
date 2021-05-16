<template>
  <div id="form-container">
    <form class="email-form">
      <div class="title">
        <h3>Sign Up</h3>
      </div>
      <div>
        <h2>Full Name</h2>
        <input
          name="fname"
          type="text"
          class="input-field"
          v-model="fullName"
          :class="{ active: isFullNameValid }"
        />
      </div>

      <div>
        <h2>Email</h2>
        <input
          name="email"
          type="text"
          class="input-field"
          v-model="email"
          :class="{ active: isEmailValid }"
        />
        <span v-if="emailError">{{ emailError }}</span>
      </div>

      <div>
        <h2>Password</h2>
        <input
          name="password"
          type="text"
          class="input-field"
          v-model="password"
          :class="{ active: isPasswordValid }"
        />
        <span v-if="passwordError">{{ passwordError }}</span>
      </div>

      <div>
        <h2>Confirm Password</h2>
        <input
          name="confirmpassword"
          type="text"
          class="input-field"
          v-model="confirmPassword"
          :class="{ active: isConfirmPasswordValid }"
        />
        <span v-if="confirmPasswordError">{{ confirmPasswordError }}</span>
      </div>
      <div class="sign-up-button">
        <button class="btn" type="submit" @click="validateForm">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'EmailSignupForm',
  setup() {
    const isFullNameValid = ref(false)
    const isEmailValid = ref(false)
    const isPasswordValid = ref(false)
    const isConfirmPasswordValid = ref(false)
    const fullName = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const emailError = ref('')
    const passwordError = ref('')
    const confirmPasswordError = ref('')
    const emailRegex = ref('')
    emailRegex.value = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    const passwordRegex = ref('')
    passwordRegex.value = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,12}$)'
    )

    const validateForm = e => {
      isFullNameValid.value = false
      isEmailValid.value = false
      isPasswordValid.value = false
      isConfirmPasswordValid.value = false
      confirmPasswordError.value = ''
      emailError.value = ''
      passwordError.value = ''

      if (!fullName.value) {
        isFullNameValid.value = true
      }
      if (!email.value) {
        isEmailValid.value = true
      }
      if (!password.value) {
        isPasswordValid.value = true
      }
      if (!confirmPassword.value) {
        isConfirmPasswordValid.value = true
      }
      if (!emailRegex.value.test(email.value)) {
        emailError.value = 'Email address is of an invalid format'
      }
      if (!passwordRegex.value.test(password.value)) {
        passwordError.value =
          'Password must have 1 upper case, 1 lower case, 1 number and 1 special character. Password must be between 8 - 12 characters'
      }
      if (password.value !== confirmPassword.value) {
        confirmPasswordError.value = 'Password does not match'
      }
      e.preventDefault()
    }

    return {
      isFullNameValid,
      isEmailValid,
      isPasswordValid,
      isConfirmPasswordValid,
      validateForm,
      fullName,
      email,
      password,
      confirmPassword,
      emailError,
      passwordError,
      confirmPasswordError,
    }
  },
}
</script>

<style scoped>
.email-form {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 20em;
  max-height: 41em;
  margin: auto;
  padding: 2em;
  font-family: arial;
}

.btn {
  width: 5em;
  margin-top: 2em;
  height: 2em;
}

.input-field {
  height: 2.5em;
  width: 19em;
}

.active {
  border-color: red;
}

.title {
  text-align: center;
}

.sign-up-button {
  text-align: center;
}
</style>
