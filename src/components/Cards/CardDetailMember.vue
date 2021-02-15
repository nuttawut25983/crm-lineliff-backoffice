<template>
  <div
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
      <ul class="nav nav-tabs">
        <li class="nav-item ">
          <a class="nav-link active" data-toggle="tab" href="#detail"
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

      <div class="tab-content">
        <div id="detail" class="tab-pane fade active show">
          <h3>ข้อมูลคอร์ส</h3>
          <p>Some content.</p>
        </div>
        <div id="appointment" class="tab-pane fade">
          <h3>Menu 1</h3>
          <p>Some content in menu 1.</p>
        </div>
        <div id="history" class="tab-pane fade">
          <h3>Menu 2</h3>
          <p>Some content in menu 2.</p>
        </div>
      </div>
    </div>
  </div>
</template>
