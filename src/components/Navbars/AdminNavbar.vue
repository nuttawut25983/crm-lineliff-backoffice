<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-white md:flex-row md:flex-no-wrap md:justify-start flex items-center p-3"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4"
    >
      <button
        class="cursor-pointer text-black opacity-50 pr-3 py-1 text-xl leading-none bg-transparent rounded"
        type="button"
        @click="toggleNav"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <a
        class="text-white text-sm hidden lg:inline-block font-semibold"
        href="javascript:void(0)"
      >
        <form>
          <div class="input-group">
            <input
              class="form-control py-1 border-right-0 border"
              type="search"
              placeholder="Search..."
              id="example-search-input"
            />
            <span class="input-group-append">
              <button
                class="btn btn-outline-secondary border-left-0 border"
                type="button"
              >
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
      </a>
      <!-- User -->
      <div
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
      >
        <div class="relative flex w-full flex-wrap items-stretch">
          <button
            class="cursor-pointer text-black opacity-50 px-4 py-1 text-x leading-none"
            type="button"
          >
            <i class="fas fa-bell"></i>
          </button>
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
          </span>
          <div class="row">
            <user-dropdown class="px-2" />
            <div class="col">
              <div class="row text-md font-semibold">Lelia Porter</div>
              <div class="row text-sm font-semibold" style="color: #7b91b0">
                Marketing Administrator
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
export default {
  data() {
    return {};
  },
  components: {
    UserDropdown,
  },
  methods: {
    toggleNav() {
      this.$parent.$emit("toggleNav");
    },
  },
};
</script>
