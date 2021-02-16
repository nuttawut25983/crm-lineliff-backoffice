<template>
  <div>
    <!-- modal create member -->
    <div
      class="modal fade"
      id="ModalManageAppointment"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalManageAppointmentCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title font-weight-bold text-xl">จัดการนัดหมาย</h2>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body px-5">
            <div>คอร์ส A</div>
            <div class="row">
              <div class="col flex">
                <div style="width: 300px;">
                  รายละเอียด xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx
                </div>
                <div style="width: 250px;">
                  สาขา xxxxxxx
                </div>
              </div>
              <div class="col text-right">
                <div class="row" style="color:#00205C">
                  จำนวนทั้งหมด 5 ครั้ง
                </div>
                <div class="row" style="color:#9C0E05">
                  ใช้ 2 ครั้ง เหลือ 3 ครั้ง
                </div>
              </div>
            </div>
            <hr class="solid mt-2" />
            <div class="d-flex flex-row-reverse py-2">
              <div class="p-2">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  style="background-color:#00205C; border-radius:7px; width:100px;"
                >
                  สร้างนัดหมาย
                </button>
              </div>
              <div class="p-2">
                <datepicker
                  :bootstrap-styling="true"
                  class="mb-3"
                  style="width: 180px;"
                  placeholder="เลือกวันที่นัด"
                ></datepicker>
              </div>
            </div>
            <div class="text-center">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ครั้งที่</th>
                    <th scope="col">สาขา</th>
                    <th scope="col">วันที่</th>
                    <th scope="col">การชำระ</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>3</td>
                    <td>xxxxxx</td>
                    <td>18-12-2021</td>
                    <td style="color:#F17105">รอชำระ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="border rounded mt-5 mb-5">
              <div class="text-center">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">ครั้งที่</th>
                      <th scope="col">สาขา</th>
                      <th scope="col">วันที่</th>
                      <th scope="col">การชำระ</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>xxxxxx</td>
                      <td>10-02-2021</td>
                      <td style="color:#43C506">ชำระแล้ว</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>xxxxxx</td>
                      <td>13-02-2021</td>
                      <td style="color:#43C506">ชำระแล้ว</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
  data() {
    return {};
  },
  components: {
    Datepicker,
  },
};
</script>

<style>
input[type="text"] {
  height: 30px;
}
</style>
