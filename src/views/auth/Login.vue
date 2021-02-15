<template>
  <div>
    <div class="login-wrapper">
      <div class="login-left">
        <div class="h1">
          <img src="@/assets/img/logo.png" />
          <div class="text-logo "><img src="@/assets/img/saijai.png" /></div>

          <div>
            <button class="clickHere" @click="showhide()">เข้าใช้งาน</button>
          </div>
        </div>
      </div>

      <div class="login-right">
        <div class="title">เข้าสู่ระบบ</div>
        <div class="form-group">
          <input type="text" id="username" placeholder="ชื่อบัญชีผู้ใช้" />
        </div>
        <div class="form-group">
          <input type="password" id="password" placeholder="รหัสผ่าน" />
        </div>

        <select class="pl-3">
          <option disabled selected value> -เลือกสาขา- </option>
          <option value="0">หนองหอย</option>
          <option value="1">ป่าตัน</option>
          <option value="2">สุเทพ</option>
        </select>

        <div>
          <router-link to="/admin/tables">
            <button class="button">เข้าสู่ระบบ</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
  mounted() {
    let openLoginRights = document.querySelector(".clickHere");
    let loginWrapper = document.querySelector(".login-wrapper");

    openLoginRights.addEventListener("click", function() {
      loginWrapper.classList.toggle("open");
    });
  },
  methods: {
    showhide() {
      var text = document.querySelector(".clickHere");
      text.classList.add("d-none");
    },
  },
};
</script>
<style>
.clickHere {
  font-size: 28px;

  margin-top: 50px;
  border: none;
  width: 100%;
  height: 45px;
  color: white;
  background-color: #00205c;
  border-radius: 50px;
  transition-duration: 0.4s;
}
.clickHere:hover {
  font-size: 30px;
  outline: none;
  text-shadow: 0 0 11px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 4px #000000;
}
.title {
  font-size: 48px;
  padding-bottom: 50px;
}
input {
  display: block;
  border: 1.6px solid #afadad;
  width: 100%;
  height: 50px;
  color: rgb(0, 0, 0);
  background-color: #d8d8d8;
  border-radius: 50px;
  transition-duration: 0.4s;
  padding-left: 20px;
}
input:focus {
  outline: none;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  height: 40px;
}

.form-group {
  position: relative;
  padding-bottom: 15px;
}

.h1 {
  letter-spacing: 0.2405em;
  transition: 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  text-align: center;

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
  background-image: url("../../assets/img/Login.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
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
  transform: translateX(-600px) translateZ(0);
}

.login-right {
  text-align: center;
  padding-right: 70px;
  padding-left: 0;
  position: absolute;
  top: 25%;
  right: 0;
  width: 500px;
  transform: translateX(500px) translateZ(0);
  transition: 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
}
.open .login-right {
  transform: translateX(0px) translateZ(0);
}

select {
  display: flex;
  align-items: left;
  border: none;
  background-color: #d8d8d8;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1.6px solid #afadad;
  border-radius: 50px;
}
select:focus {
  outline: none;
}

.button {
  margin-top: 50px;
  display: block;
  width: 100%;
  height: 45px;
  color: white;
  background-color: #00205c;
  border-radius: 50px;
  transition-duration: 0.4s;
}
.button:hover {
  outline: none;
  text-shadow: 0 0 11px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 4px #000000;
}
</style>
