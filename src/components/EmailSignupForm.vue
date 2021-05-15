<template>
  <div id="form-container">
    <form class="email-form">
      <div class="title">
        <h3>Sign Up</h3>
      </div>
      <div>
        <h2>Full Name</h2>
        <input
          id="fname"
          name="fname"
          type="text"
          class="input-field"
          v-model="fullName"
          :class="{ active: isValid }"
          @change="handleChange"
        />
      </div>

      <div>
        <h2>Email</h2>
        <input
          id="email"
          name="email"
          type="text"
          class="input-field"
          v-model="email"
          :class="{ active: isValid }"
          @change="handleChange"
        />
        <span v-if="emailError">{{ emailError }}</span>
      </div>

      <div>
        <h2>Password</h2>
        <input
          id="password"
          name="password"
          type="text"
          class="input-field"
          v-model="password"
          :class="{ active: isValid }"
          @change="handleChange"
        />
        <span v-if="passwordError">{{ passwordError }}</span>
      </div>

      <div>
        <h2>Confirm Password</h2>
        <input
          id="confirmpassword"
          name="confirmpassword"
          type="text"
          class="input-field"
          v-model="confirmPassword"
          :class="{ active: isValid }"
          @change="handleChange"
        />
        <span v-if="confirmPasswordError">{{ confirmPasswordError }}</span>
      </div>
      <div>
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
    const isValid = ref(false)
    const fullName = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const emailError = ref('')
    const passwordError = ref('')
    const confirmPasswordError = ref('')
    // const emailRegex = ref('')
    // emailRegex.value =
    //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const passwordRegex = ref('')
    passwordRegex.value =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/
    const validateForm = e => {
      if (!fullName.value) {
        isValid.value = true
      }
      if (!email.value) {
        isValid.value = true
      }
      if (!password.value) {
        isValid.value = true
      }
      if (!confirmPassword.value) {
        isValid.value = true
      }
      // if (emailRegex.value.test(email)) {
      //   emailError.value = 'Email address is of an invalid format'
      // }
      if (passwordRegex.value.test(password)) {
        passwordError.value =
          'Password must have 1 upper case, 1 lower case, 1 number and 1 special character. Password must be between 8 - 12 characters'
      }
      if (password.value !== confirmPassword.value) {
        confirmPasswordError.value = 'Password does not match'
      }
      e.preventDefault()
    }
    const onChange = () => {
      if (fullName.value) {
        isValid.value = false
      }
      if (email.value) {
        isValid.value = false
      }
      if (password.value) {
        isValid.value = false
      }
      if (confirmPassword.value) {
        isValid.value = false
      }
    }
    return {
      isValid,
      validateForm,
      fullName,
      email,
      password,
      confirmPassword,
      emailError,
      passwordError,
      confirmPasswordError,
      onChange,
    }
  },
}
</script>

<style scoped>
.email-form {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 22em;
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
</style>
