<template>
  <div class="modal-admin">
    <!-- modal create admin -->
    <div
      class="modal fade"
      id="ModalCreateAdmin"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalCreateMemberCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title font-weight-bold">เพิ่มข้อมูลสมาชิก</h2>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row px-5 mb-2">
                <div class="col mb-2">
                  <select class="form-control" name="branch" id="branch">
                    <option value="">--สาขา--</option>
                  </select>
                </div>
                <div class="col">
                  <select class="form-control" name="role" id="role">
                    <option value="">--บทบาท--</option>
                    <!-- owner  -->
                    <option value="2">--เจ้าของคลินิก--</option>
                    <!-- manager -->
                    <option value="1">--ผู้จัดการ--</option>
                    <!-- sale -->
                    <option value="0">--พนักงาน--</option>
                  </select>
                </div>
              </div>
              <div class="row px-5">
                <div class="col">
                  <input
                    type="text"
                    id="fname"
                    class="form-control mb-3"
                    placeholder="ชื่อ"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    id="lname"
                    class="form-control"
                    placeholder="นามสกุล"
                  />
                </div>
              </div>
              <div class="row px-5">
                <div class="col">
                  <div>
                    <datepicker
                      :bootstrap-styling="true"
                      class="mb-3 rounded"
                      id="dob"
                      placeholder="วันเกิด"
                    ></datepicker>
                  </div>
                </div>
                <div class="col">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option value="" disabled selected hidden>เพศ</option>
                    <option>ชาย</option>
                    <option>หญิง</option>
                  </select>
                </div>
              </div>
              <div class="px-5">
                <input
                  type="email"
                  class="form-control mb-3"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="px-5 mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="phone"
                  placeholder="เบอร์โทรศัพท์"
                />
              </div>
              <div class="px-5 mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="position"
                  placeholder="ตำแหน่ง"
                />
              </div>
              <div class="px-5 mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div class="px-5 mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="password"
                  placeholder="Create password"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              style="
                background-color: #00205c;
                border-radius: 7px;
                width: 100px;
              "
            >
              เพิ่มตำแหน่ง
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              style="
                background-color: #9c0e05;
                border-radius: 7px;
                width: 100px;
              "
              data-dismiss="modal"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {};
  },
  components: {
    Datepicker,
  },
};
</script>
<style>
select {
  border-radius: 5px;
  border: 1px solid;
  height: auto;
  background: #fff;
}
#fname,
#lname,
#gender,
#dob,
#phone,
#branch,
#role,
#position,
#username,
#password {
  width: 100%;
  height: 40px;
}
</style>
