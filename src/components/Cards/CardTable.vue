<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
  >
    <div class="rounded-t mb-0 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg text-gray-800">
            Member
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
        <form>
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h2
                    class="modal-title font-weight-bold"
                    id="exampleModalLongTitle"
                  >
                    เพิ่มข้อมูลลูกค้า
                  </h2>
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
                          id="exampleFormControlInput1"
                          class="form-control mb-3"
                          placeholder="ชื่อ"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          id="exampleFormControlInput1"
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
                            class="mb-3  rounded"
                            placeholder="วันเกิด"
                          ></datepicker>
                        </div>
                      </div>
                      <div class="col">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
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
                        id="exampleFormControlInput1"
                        placeholder="Email"
                      />
                    </div>
                    <div class="px-5">
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="เบอร์โทรศัพท์"
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">
                    เพิ่มลูกค้า
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->

      <table class="table">
        <thead>
          <tr class="text-sm text-nowrap" style="color: #96A5B8">
            <td scope="col" class="px-4">Name</td>

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
                <div class="pl-2">Sims House</div>
              </div>
            </td>
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
import Datepicker from "vuejs-datepicker";

export default {
  data() {
    return {};
  },
  components: {
    TableDropdown,
    Datepicker,
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
