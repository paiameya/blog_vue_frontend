<template>
  <div class="account-section">
    <Header />
    <div class="account-container">
      <div class="account-box">
        <div class="account-img">
          <img :src="HelloIllustration" alt="hello" />
        </div>
        <div class="account">
          <h1 class="account-title">Tools to grow your traffic</h1>
          <p class="account-text">
            Impact helps you learn why your competitors rank so high and what
            you need to do to outrank them.
          </p>
          <div class="form-container">
            <form class="account-form">
              <input
                class="account-input"
                type="text"
                placeholder="Full name"
                required
              />
              <input
                class="account-input"
                type="email"
                placeholder="Your email"
                required
              />
              <Button class="account-btn" label="Create your account" />
              <div class="terms">
                <input id="check" class="checkbox" type="checkbox" />
                <label class="account-label" for="check">I agree to the</label>
                <a class="terms-link" href="#">Terms & Conditions</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="pattern bottom"></div>
  </div>
</template>

<script>
import Header from './Header'
import Button from 'primevue/button'
import HelloIllustration from '../assets/hero-illustration.svg'
export default {
  components: {
    Button,
    Header,
  },
  setup() {
    return {
      HelloIllustration,
    }
  },
}
</script>

<style>
.account-section {
  background-color: #f4f6fc !important;
  margin: 0;
}
.account-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  padding-top: 3rem;
}
.account-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.account-img {
  width: 350px;
  margin-right: auto;
}

.account {
  width: 100%;
  flex: 50%;
}

.account-title {
  font-size: 3.5rem;
  margin-bottom: 1rem !important;
  font-weight: 700;
  line-height: 1.3;
  color: #24262b;
}
.account-text {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
}
.form-container {
  margin-top: 1.5rem !important;
}
.account-form {
  margin-bottom: 3rem !important;
}
.account-input {
  font-size: 1rem;
  border-radius: 0.5rem;
  box-shadow: none;
  transition: all 0.3s ease-in-out;
  display: block;
  outline: none;
  width: 100%;
  height: calc(1.5em + 1.4rem);
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #4a5073;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 0.0625rem solid #eaedf2;
  margin-bottom: 1rem;
}

.account-btn {
  color: #ffffff;
  background-color: #0648b3;
  cursor: pointer;
  border-color: #0648b3;
  box-shadow: 0 0.125rem 0.25rem rgb(13 20 49 / 7%);
  display: inline-block;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  border: 0.0625rem solid transparent;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.5rem;
  width: 100%;
}

.terms {
  margin-top: 1rem;
  vertical-align: middle;
}

.checkbox {
  zoom: 1.3;
}
.account-label {
  display: inline-block;
  position: relative;
  padding-left: 0.1rem;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 0;
  transition: all 0.2s ease;
  color: #4a5073;
}
.terms-link {
  margin-left: 0.5rem;
  text-decoration: none;
  color: #0648b3;
  transition: all 0.2s ease;
}
.pattern.bottom,
.pattern.bottom {
  bottom: -10px;
  transform: rotate(180deg);
}
.pattern {
  width: 100%;
  background-image: url(https://blog.rayabharitech.com/front/assets/img/patterns/wave.svg);
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 1450px 160px;
  height: 0;
  padding: 0;
  padding-bottom: 131px;
}
@media (max-width: 991.98px) {
  .pattern {
    background-size: 700px 203px;
  }
  .account-container {
    padding-top: 0;
  }
}

@media (max-width: 540px) {
  .account-img {
    order: 2;
    width: 100%;
  }
  .account-section {
    display: flex;
    flex-direction: column;
  }
  .account {
    margin-left: 0.1rem;
  }
  .account-title {
    font-size: 1.8rem;
  }
}

@media (min-width: 768px) {
  .account-box {
    flex-direction: row;
  }
  .account-img {
    flex: 0 0 50%;
    max-width: 50%;
    order: 2;
    margin-top: 9rem;
  }
  .account {
    flex: 0 0 35%;
    max-width: 35%;
    margin: 2rem;
  }
  .account-title {
    font-size: 1.8rem;
  }
  .pattern {
    background-size: 1450px 160px;
  }
  .terms {
    font-size: 0.8rem;
  }
}

@media (min-width: 1024px) {
  .account-container {
    display: flex;
    justify-content: center;
  }
  .account-img {
    order: 0;
    flex: 0 0 50%;
    max-width: 50%;
    order: 0;
    margin-top: 0;
  }
  .account {
    flex: 0 0 41.66667%;
    max-width: 41%;
    margin: -0.2rem 0 0 7rem;
  }
  .account-title {
    font-size: 3.5rem;
  }
  .account-text {
    font-size: 1rem;
    max-width: 80%;
  }
  .form-container {
    max-width: 80%;
  }
}
</style>
