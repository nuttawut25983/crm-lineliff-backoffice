<template>
  <div
    id="member-detail"
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <h6 class="text-gray-800 text-l font-bold">ข้อมูลสมาชิก</h6>
      <div class="row">
        <div>
          <img
            class="p-3"
            style="border-radius:24px;height: 150px; width: 150px"
            src="https://via.placeholder.com/150"
          />
        </div>
        <div class="col p-3">
          <div class="row pb-2">กนก กานต์กนก</div>
          <div class="row pb-2">
            วันเกิด : 14 ก.พ. 2530
            <div class="ml-3">อายุ : 33 ปี</div>
          </div>
          <div class="row pb-2">เบอร์โทร : 0XX-XXX-XXXX</div>
          <div class="row">อีเมล : xxx_xx@gmail.com</div>
        </div>
        <div class="col">
          <div class="row">สมาชิกระดับ</div>
          <div class="row">------</div>
          <div class="row">สมาชิกระดับ</div>
          <div class="row">------</div>
        </div>
      </div>
      <ul class="nav nav-tabs pt-3">
        <li class="nav-item ">
          <a class="nav-link active" data-toggle="tab" href="#course-detail"
            >ข้อมูลคอร์ส</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#appointment"
            >การนัดหมาย</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#history"
            >ประวัติใช้บริการ</a
          >
        </li>
      </ul>
      <!-- ข้อมูลคอร์ส component-->
      <div class="tab-content m-5">
        <div id="course-detail" class="tab-pane fade active show">
          <CourseDetail />
        </div>
        <div id="appointment" class="tab-pane fade">
          <Appointment />
        </div>
        <div id="history" class="tab-pane fade">
          <History />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseDetail from "@/components/TabNav/CourseDetail.vue";
import Appointment from "@/components/TabNav/Appointment.vue";
import History from "@/components/TabNav/History.vue";
export default {
  data() {
    return {};
  },

  components: {
    CourseDetail,
    Appointment,
    History,
  },
};
</script>
