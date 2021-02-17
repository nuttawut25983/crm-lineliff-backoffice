<template>
  <div>
    <div
      class="relative flex flex-col min-w-0 break-words  mb-6 shadow border rounded-lg bg-white m-5"
    >
      <div class="d-flex bd-highlight p-3">
        <div class="text-xl" style="color:#00205C">
          ประวัติการใช้บริการ
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
              <td class="text-center" scope="col">วันที่รับบริการ</td>
              <td class="text-center" scope="col">ครั้งที่</td>
              <td class="text-center" scope="col">ผลตอบรับ</td>
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
                <div style="color: #00205C">14-02-2012</div>
              </td>
              <td class="text-center">
                <div>3</div>
              </td>

              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm mx-2"
                  style="background-color:#00205C;
                   border-radius:15px;
                    border: 2px solid #00205C;
                    width:80px;"
                >
                  รีวิว
                </button>

                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  style="background-color:#fff; 
                  border-radius:15px;
                  color: #00205C;
                  border: 2px solid #00205C;
                   width:80px;"
                >
                  ใบเสร็จ
                </button>
              </td>
            </tr>
            <tr class="text-sm">
              <td>
                <div class="px-3">
                  คอร์ส A
                </div>
              </td>
              <td class="text-center">
                <div style="color: #00205C">14-02-2012</div>
              </td>
              <td class="text-center">
                <div>3</div>
              </td>

              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm mx-2"
                  style="background-color:#00205C;
                   border-radius:15px;
                    border: 2px solid #00205C;
                    width:80px;"
                >
                  รีวิว
                </button>

                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  style="background-color:#fff; 
                  border-radius:15px;
                  color: #00205C;
                  border: 2px solid #00205C;
                   width:80px;"
                >
                  ใบเสร็จ
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
