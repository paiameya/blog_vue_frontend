<template>
  <div id="form-container">
    <form class="email-form">
      <div class="fname">
        <label>Full Name</label>
        <input type="text" name="fname" value="" />
      </div>
      <div class="email">
        <label>Email Address</label>
        <input type="text" name="email" value="" />
      </div>
      <div class="password">
        <label>Password</label>
        <input type="text" name="password" value="" />
      </div>
      <div class="confirm-password">
        <label>Confirm Password</label>
        <input type="text" name="confirmpassword" value="" />
      </div>
      <input type="submit" value="Sign Up" />
    </form>
  </div>
</template>

<style scoped>
.email-form {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 18em;
  margin: auto;
  padding: 2em;
  font-family: arial;
}

.email-form > div {
  margin-bottom: 2em;
}

.fname {
  margin-bottom: 1em;
}
</style>
