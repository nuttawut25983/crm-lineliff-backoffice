<template>
  <div class="row ">
    <div class="col-lg-7">
      <div style="padding-top:10%; padding-right:10%; padding-left:10%">
        <div class="col">
          <vue-particles color="#dedede" class="px-5"></vue-particles>
          <div class="row text-lg">
            ฮักษา เมดิคอล: คลินิกที่คุณไว้ใจ
          </div>
          <div class="row">
            <h1 style="font-size:50px">Welcome <br />to</h1>
            <img class="py-5" src="@/assets/img/logo-saijai.png" />
          </div>
          <div class="row">
            <h1 style="font-size:20px; color:#2e4775; opacity: 0.55;">
              Login in the your account
            </h1>
          </div>
          <div
            class="row"
            style="font-size:14px;padding-top:15%; color:#BBBBBB"
          >
            เราให้บริการด้านการแพทย์ โดยยึดหลักการรักษาด้วยหัวใจ
            ด้วยความห่วงใยผู้ป่วยดุจเสมือนญาติมิตรของเราเอง ให้คุณได้
            เข้าถึงการตรวจรักษาอย่างใกล้ชิดกับแพทย์ผู้เชี่ยวชาญ
            เพื่อคุณภาพชีวิตและสุขภาพที่ดีขึ้นของคุณอย่างคุ้มค่าคุ้มราคา
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5">
      <div style="padding-top:45%; padding-left:20%; padding-right:20%;">
        <form>
          <h5 style="font-size: 1.50rem; padding-bottom:20px">เข้าสู่ระบบ</h5>
          <div class="form-group">
            <label for="username" class="text-gray-500">ชื่อบัญชีผู้ใช้</label>
            <input
              id="username"
              type="text"
              name="username"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="password" class="text-gray-500">รหัสผ่าน</label>
            <input
              id="password"
              type="password"
              name="password"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="button">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
#username {
  background-color: transparent;
  border: none;
  border-radius: 2px;
  border-bottom: 1px solid #ccc;
  color: #555;
}
#username:focus {
  outline: none;
  box-shadow: none;
}
#password {
  background-color: transparent;
  border: none;
  border-radius: 2px;
  border-bottom: 1px solid #ccc;
  color: #555;
}
#password:focus {
  outline: none;
  box-shadow: none;
}
.button {
  display: block;
  width: 100%;
  height: 50px;
  color: white;
  background-color: #00205c;
  border-radius: 50px;
  transition-duration: 0.4s;
}

.button:hover {
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
