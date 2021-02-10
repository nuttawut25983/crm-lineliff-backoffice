<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-white md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4"
    >
      <i class="fas fa-bars" style="color:#96A5B8"></i>
      <!-- Form -->
      <form class="col-md-offset-3 col-md-5 col-md-offset-3">
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

      <!-- User -->
      <div class="row">
        <user-dropdown class="px-2" />
        <div class="col">
          <div class="row text-md font-semibold">
            Lelia Porter
          </div>
          <div class="row text-sm font-semibold" style="color:#7B91B0">
            Marketing Administrator
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
  components: {
    UserDropdown,
  },
};
</script>
<style scoped></style>
