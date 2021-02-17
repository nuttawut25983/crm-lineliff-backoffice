<template>
  <div>
    <!-- modal cancel appointment -->
    <div
      class="modal fade"
      id="ModalCancelAppointment"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalCancelAppointmentCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content text-center">
          <div class="modal-body">
            <div class="py-2">
              <div class="text-2xl p-2" style="color: #9C0E05">ยกเลิกนัด</div>
              <div class="text-xl p-2 mb-3 " style="color: #21326A">ยืนยันที่จะยกเลิกการนัดหมายนี้</div>

              <button
                type="button"
                class="btn btn-secondary btn-sm"
                style="
                  background-color: #9C0E05;
                  border-radius: 7px;
                  width: 100px;
                   border: 2px solid #9C0E05;
                  margin-right: 10px;
                "
              >
                ยืนยัน
              </button>

              <button
                type="button"
                class="btn btn-secondary btn-sm"
                style="
                  background-color: #fff;
                  color:#9C0E05;
                  border-radius: 7px;
                  border: 2px solid #9C0E05;
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
