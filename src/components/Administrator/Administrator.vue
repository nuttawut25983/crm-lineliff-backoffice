<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
  >
    <div class="rounded-t mb-0 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg text-gray-800">Administration</h3>
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
              style="
                background-color: #00205c;
                border-radius: 7px;
                width: 100px;
              "
              data-toggle="modal"
              data-target="#ModalCreateAdmin"
            >
              Create new
            </button>
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->

      <table class="table table-hover">
        <thead>
          <tr class="text-sm" style="color: #96a5b8">
            <td scope="col" class="px-4">Name</td>
            <td scope="col">Owner</td>
            <td scope="col">Addres</td>
            <td scope="col">Date Construction</td>
            <td scope="col">Status</td>
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
                  style="width: 50px"
                />
                <div class="pl-2">
                  <router-link to="/members/detail/1"> Sims House</router-link>
                </div>
              </div>
            </td>
            <td>Connor Sims</td>
            <td>449 Iwiwi Trail, New York, US</td>
            <td>January 15, 2000</td>
            <td>
              <button type="button" class="btn btn-primary" disabled>
                <span class="badge">3</span>
              </button>
            </td>
            <td>
              <div class="flex items-center">
                <div
                  class="fas fa-pencil-alt mr-2 text-sm"
                  style="color: #96a5b8"
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
                  style="width: 50px"
                />
                <div class="pl-2">
                  <router-link to="/members/detail/1"> Smish House</router-link>
                </div>
              </div>
            </td>
            <td>Adam Smish</td>
            <td>222A Andoran Neva, New York, US</td>
            <td>October 22, 2012</td>
            <td>
              <button type="button" class="btn btn-success" disabled>
                <span class="badge">4</span>
              </button>
            </td>
            <td>
              <div class="flex items-center">
                <div
                  class="fas fa-pencil-alt mr-2 text-sm"
                  style="color: #96a5b8"
                />
                <table-dropdown />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <CreateAdmin />
  </div>
</template>
<script>
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";
import CreateAdmin from "@/components/Modal/CreateAdmin.vue";

export default {
  data() {
    return {};
  },
  components: {
    TableDropdown,
    CreateAdmin,
  },
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
