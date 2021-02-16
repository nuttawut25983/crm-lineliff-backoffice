<template>
  <div>
    <ul class="nav nav-pills nav-fill text-gray-500">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="pill" href="#used"
          >เริ่มใช้บริการแล้ว</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#not-used"
          >ยังไม่ใช้บริการ</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#points">แลกคะแนนสะสม</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#end">สิ้นสุดแล้ว</a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="used" class="tab-pane fade in active show">
        <div
          class="relative flex flex-col min-w-0 break-words  mb-6 shadow border rounded-lg bg-white m-5"
        >
          <div class="d-flex bd-highlight mb-3">
            <div class="p-2 bd-highlight">คอร์สที่เริ่มใช้บริการแล้ว</div>

            <div class="ml-auto p-2">
              <form>
                <div class="input-group">
                  <input
                    class="form-control border-right-0 border rounded-full px-1"
                    type="search"
                    placeholder="Search..."
                  />
                  <span class="input-group-append">
                    <button
                      class="btn btn-outline-secondary border-left-0 border rounded-full"
                      type="button"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <!-- Projects table -->

            <table class="table table-hover">
              <thead>
                <tr class="text-sm">
                  <td scope="col" class="px-4">ชื่อคอร์ส</td>
                  <td scope="col">จำนวนที่ใช้</td>
                  <td scope="col">สถานะการชำระ</td>
                  <td scope="col">การจัดการ</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-sm text-left">
                  <td>
                    <div class="px-3">
                      คอร์ส A
                    </div>
                  </td>
                  <td>
                    <div style="color: #9C0E05">ใช้ 2 ครั้ง เหลือ 3 ครั้ง</div>
                  </td>
                  <td>
                    <div style="color: #43C506">ชำระแล้ว 1 ครั้ง</div>
                  </td>

                  <td>
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      style="background-color:#00205C; border-radius:7px; width:100px;"
                    >
                      จัดการวันนัด
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="not-used" class="tab-pane fade">
        <h3>Menu 1</h3>
        <p>Some content in menu 1.</p>
      </div>
      <div id="points" class="tab-pane fade">
        <h3>Menu 2</h3>
        <p>Some content in menu 2.</p>
      </div>
      <div id="end" class="tab-pane fade">
        <h3>Menu 2</h3>
        <p>Some content in menu 2.</p>
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
<style>
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #21326a;
}
.nav-pills .nav-link {
  border-radius: 32rem;
}
</style>
