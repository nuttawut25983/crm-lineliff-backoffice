<template>
  <div>
    <div class="login-wrapper">
      <div class="login-left">
        <img src="@/assets/img/Login.png" />
        <div class="h1">
          <img src="@/assets/img/logo.png" />
          <div class="text-logo"><img src="@/assets/img/saijai.png" /></div>
        </div>
      </div>
      <div class="login-right">
        <div class="form-group">
          <input type="text" id="username" placeholder="ชื่อบัญชีผู้ใช้" />
        </div>
        <div class="form-group">
          <input type="password" id="password" placeholder="รหัสผ่าน" />
        </div>
        <div class="button-area">
          <router-link to="/admin/tables">
          <button class="btn btn-secondary">เข้าสู่ระบบ</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
  mounted() {
    let openLoginRights = document.querySelector(".login-left");
    let loginWrapper = document.querySelector(".login-wrapper");

    openLoginRights.addEventListener("click", function() {
      loginWrapper.classList.toggle("open");
    });
  },
};
</script>
<style>
.all {
  cursor: pointer;
}
input {
  border: 0;
  border-bottom: 1px solid #aaa;
  color: #000;
  border-radius: 0;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  height: 40px;
}

.form-group {
  position: relative;
  padding-top: 15px;
}
input:placeholder-shown {
  transform: translateX(15px);
}

.h1 {
  letter-spacing: 0.2405em;
  transition: 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  text-align: center;
  cursor: pointer;
  position: absolute;
  width: 300px;
}
.text-logo {
  padding-top: 50px;
}
.open .h1 {
  transform: translateZ(400px) translateX(0);
}
.login-wrapper {
  width: 100%;
  height: 100%;
  /* background-color: red; */
  /* background-color: red; */
  /* background-color: red; */
  /* background-color: red; */

  overflow: hidden;
  position: absolute;
}
.login-left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  overflow: hidden;
  cursor: pointer;
}
.login-left img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  transition: 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  object-position: left;
}
.open .login-left img {
  transform: translateX(300px) translateZ(0);
}
.open .login-left {
  transform: translateX(-500px) translateZ(0);
}

.login-right {
  padding: 40px;
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  transform: translateX(500px) translateZ(0);
  transition: 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
}
.open .login-right {
  transform: translateX(0px) translateZ(0);
}
</style>
