<template>
  <div>
    <!-- modal create member -->
    <div
      class="modal fade"
      id="ModalCreateMember"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalCreateMemberCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title font-weight-bold">เพิ่มข้อมูลลูกค้า</h2>
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
                  <select class="form-control" id="gender">
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
              <div class="px-5">
                <input
                  type="number"
                  class="form-control"
                  id="phone"
                  placeholder="เบอร์โทรศัพท์"
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
              @click="handleCreateMember"
            >
              เพิ่มลูกค้า
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
    <!--modal create success -->
    <div
      class="modal fade"
      id="modalSuccess"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalSuccessCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content text-center">
          <div class="modal-body">
            <div class="container">
              <img
                src="@/assets/img/confirmation.png"
                style="width: 150px; height: 150px; margin: 0 auto"
              />

              <div class="text-xl p-2">ลงทะเบียนเสร็จสิ้น</div>
              <input
                type="text"
                class="form-control mb-3 text-center"
                value="XX-XXXXX"
                style="
                  border-radius: 20px;
                  color: #9c0e05;
                  height: 30px;
                  width: 200px;
                  margin: 0 auto;
                "
                readonly
              />
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                style="
                  background-color: #00205c;
                  border-radius: 15px;
                  width: 100px;
                  margin-right: 10px;
                "
              >
                คัดลอก
              </button>

              <button
                type="button"
                class="btn btn-secondary btn-sm"
                style="
                  background-color: #9c0e05;
                  border-radius: 15px;
                  width: 100px;
                "
                data-dismiss="modal"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "create-member",
  data() {
    return {};
  },
  components: {
    Datepicker,
  },
  methods: {
    handleCreateMember() {
      // alert("xxxx")

      $("#modalSuccess").modal("show");
      $("#ModalCreateMember").modal("hide");
    },
  },
};
</script>
<style>
#fname,
#lname,
#dob,
#gender,
#email,
#phone {
  width: 100%;
  height: 40px;
}
</style>
