<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
  >
    <div class="rounded-t mb-0 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg text-gray-800">
            Administration
          </h3>
        </div>

        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="text-right">
            <a
              class="dropdown dropdown-toggle pr-4 text-sm"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
              Show All</a
            >

            <button
              type="button"
              class="btn btn-secondary btn-sm"
              style="background-color:#00205C; border-radius:7px; width:100px;"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Create new
            </button>
          </h3>
        </div>
        <CreateMember />
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->

      <table class="table table-hover">
        <thead>
          <tr class="text-sm" style="color: #96A5B8">
            <td scope="col" class="px-4">Name</td>
            <td scope="col">โค้ดยืนยันตัวตน</td>
            <td scope="col">จำนวนคอร์สคงเหลือ</td>
            <td scope="col">จำนวนคอร์สที่ใช้</td>
            <td scope="col">นัดหมายลูกค้า</td>
            <td scope="col">ยอดรวม</td>
            <td scope="col">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr class="text-sm text-left">
            <td scope="row">
              <div class="row px-4">
                <img
                  src="https://via.placeholder.com/150"
                  class="rounded"
                  style="width:50px"
                />
                <div class="pl-2">
                  <router-link to="/members/detail/1">
                    Sims House</router-link
                  >
                </div>
              </div>
            </td>
            <td>xx-xxxxx</td>
            <td>
              <button
                disabled
                class="btn-success rounded"
                style="width:40px; height:20px; background-color:#00E096"
              >
                3
              </button>
              คอร์ส
            </td>
            <td>ใช้บริการ 4 ครั้ง</td>

            <td>January 20, 2021</td>
            <td>20,000 บาท</td>
            <td>
              <div class="flex items-center">
                <div
                  class="fas fa-pencil-alt mr-2 text-sm"
                  style="color:#96A5B8"
                />
                <table-dropdown />
              </div>
            </td>
          </tr>
          <tr class="text-sm text-left">
            <td scope="row">
              <div class="row px-4">
                <img
                  src="https://via.placeholder.com/150"
                  class="rounded"
                  style="width:50px"
                />
                <div class="pl-2">Sims House</div>
              </div>
            </td>
            <td>xx-xxxxx</td>
            <td>
              <button
                disabled
                class="btn-success rounded"
                style="width:40px; height:20px; background-color:#00E096"
              >
                2
              </button>
              คอร์ส
            </td>
            <td>ใช้บริการ 2 ครั้ง</td>

            <td>January 15, 2021</td>
            <td>15,000 บาท</td>
            <td>
              <div class="flex items-center">
                <div
                  class="fas fa-pencil-alt mr-2 text-sm"
                  style="color:#96A5B8"
                />
                <table-dropdown />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";
import CreateMember from "@/components/Modal/CreateMember.vue";

export default {
  data() {
    return {};
  },
  components: {
    TableDropdown,
    CreateMember,
  },
  props: {
    color: {
      default: "light",
      validator: function(value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
