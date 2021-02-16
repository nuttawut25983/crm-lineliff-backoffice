<template>
  <div>
    <ul class="nav nav-pills nav-fill text-gray-500">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="pill" href="#using-course"
          >เริ่มใช้บริการแล้ว</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#not-used"
          >ยังไม่ใช้บริการ</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#course-points"
          >แลกคะแนนสะสม</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#end-course"
          >สิ้นสุดแล้ว</a
        >
      </li>
    </ul>

    <div class="tab-content">
      <!-- คอร์สที่เริ่มใช้บริการแล้ว -->
      <div id="using-course" class="tab-pane fade in active show">
        <div
          class="relative flex flex-col min-w-0 break-words  mb-6 shadow border rounded-lg bg-white m-5"
        >
          <div class="d-flex bd-highlight p-3">
            <div class="text-xl" style="color:#00205C">
              คอร์สที่เริ่มใช้บริการแล้ว
            </div>

            <div class="ml-auto p-2">
              <form>
                <input
                  class="form-control rounded-full"
                  style="height:30px;  width:180px"
                  type="search"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <!-- Projects table -->

            <table class="table table-hover borderless">
              <thead>
                <tr class="text-sm">
                  <td scope="col" class="px-4">ชื่อคอร์ส</td>
                  <td class="text-center" scope="col">จำนวนที่ใช้</td>
                  <td class="text-center" scope="col">สถานะการชำระ</td>
                  <td class="text-center" scope="col">การจัดการ</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-sm">
                  <td>
                    <div class="px-3">
                      คอร์ส A
                    </div>
                  </td>
                  <td class="text-center">
                    <div style="color: #9C0E05">ใช้ 2 ครั้ง เหลือ 3 ครั้ง</div>
                  </td>
                  <td class="text-center">
                    <div style="color: #43C506">ชำระแล้ว 1 ครั้ง</div>
                  </td>

                  <td class="text-center">
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      style="background-color:#00205C; border-radius:7px; width:100px;"
                      data-toggle="modal"
                      data-target="#ModalCreateMember"
                    >
                      จัดการวันนัด
                    </button>
                  </td>
                  <CreateMember />
                </tr>
                <tr class="text-sm">
                  <td>
                    <div class="px-3">
                      คอร์ส A
                    </div>
                  </td>
                  <td class="text-center">
                    <div style="color: #9C0E05">ใช้ 2 ครั้ง เหลือ 3 ครั้ง</div>
                  </td>
                  <td class="text-center">
                    <div style="color: #43C506">ชำระแล้ว 1 ครั้ง</div>
                  </td>

                  <td class="text-center">
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

      <!-- คอร์สที่ยังไม่ใช้บริการ -->
      <div id="not-used" class="tab-pane fade">
        <div
          class="relative flex flex-col min-w-0 break-words  mb-6 shadow border rounded-lg bg-white m-5"
        >
          <div class="d-flex bd-highlight p-3">
            <div class="text-xl" style="color:#9C0E05">
              คอร์สที่ยังไม่ใช้บริการ
            </div>

            <div class="ml-auto p-2">
              <form>
                <input
                  class="form-control rounded-full"
                  style="height:30px;  width:180px"
                  type="search"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <!-- Projects table -->

            <table class="table table-hover borderless">
              <thead>
                <tr class="text-sm">
                  <td scope="col" class="px-4">ชื่อคอร์ส</td>
                  <td class="text-center" scope="col">จำนวนที่ใช้</td>
                  <td class="text-center" scope="col">สถานะการชำระ</td>
                  <td class="text-center" scope="col">การจัดการ</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-sm">
                  <td>
                    <div class="px-3">
                      คอร์ส A
                    </div>
                  </td>
                  <td class="text-center">
                    <div style="color: #9C0E05">ใช้ 0 ครั้ง เหลือ 5 ครั้ง</div>
                  </td>
                  <td class="text-center">
                    <div style="color: #43C506">รอชำระ</div>
                  </td>

                  <td class="text-center">
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

      <!-- คอร์สที่แลกคะแนนสะสม -->
      <div id="course-points" class="tab-pane fade">
        <div
          class="relative flex flex-col min-w-0 break-words  mb-6 shadow border rounded-lg bg-white m-5"
        >
          <div class="d-flex bd-highlight p-3">
            <div class="text-xl" style="color:#43C506">
              คอร์สที่แลกคะแนนสะสม
            </div>

            <div class="ml-auto p-2">
              <form>
                <input
                  class="form-control rounded-full"
                  style="height:30px;  width:180px"
                  type="search"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <!-- Projects table -->

            <table class="table table-hover borderless">
              <thead>
                <tr class="text-sm">
                  <td scope="col" class="px-4">ชื่อคอร์ส</td>
                  <td class="text-center" scope="col">จำนวนที่ใช้</td>
                  <td class="text-center" scope="col">สถานะการชำระ</td>
                  <td class="text-center" scope="col">การจัดการ</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-sm">
                  <td>
                    <div class="px-3">
                      คอร์ส A
                    </div>
                  </td>
                  <td class="text-center">
                    <div style="color: #9C0E05">ใช้ 2 ครั้ง เหลือ 3 ครั้ง</div>
                  </td>
                  <td class="text-center">
                    <div style="color: #43C506">แลกคะแนน</div>
                  </td>

                  <td class="text-center">
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

      <!-- คอร์สที่สิ้นสุดแล้ว -->
      <div id="end-course" class="tab-pane fade">
        <div
          class="relative flex flex-col min-w-0 break-words  mb-6 shadow border rounded-lg bg-white m-5"
        >
          <div class="d-flex bd-highlight p-3">
            <div class="text-xl">
              คอร์สที่สิ้นสุดแล้ว
            </div>

            <div class="ml-auto p-2">
              <form>
                <input
                  class="form-control rounded-full"
                  style="height:30px;  width:180px"
                  type="search"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">
            <!-- Projects table -->

            <table class="table table-hover borderless">
              <thead>
                <tr class="text-sm">
                  <td scope="col" class="px-4">ชื่อคอร์ส</td>
                  <td class="text-center" scope="col">จำนวนที่ใช้</td>
                  <td class="text-center" scope="col">สถานะการชำระ</td>
                  <td class="text-center" scope="col">การจัดการ</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-sm">
                  <td>
                    <div class="px-3">
                      คอร์ส A
                    </div>
                  </td>
                  <td class="text-center">
                    <div style="color: #9C0E05">ใช้ 5 ครั้ง เหลือ 0 ครั้ง</div>
                  </td>
                  <td class="text-center">
                    <div style="color: #43C506">ชำระแล้ว</div>
                  </td>

                  <td class="text-center">
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      style="background-color:#00205C; border-radius:7px; width:100px;"
                    >
                      ซื้ออีกครั้ง
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ManageAppointment from "@/components/Modal/ManageAppointment.vue";
import CreateMember from "@/components/Modal/CreateMember.vue";
export default {
  data() {
    return {};
  },
  components: {
    // ManageAppointment,
    CreateMember,
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
.borderless td,
.borderless th {
  border: none;
}
</style>
