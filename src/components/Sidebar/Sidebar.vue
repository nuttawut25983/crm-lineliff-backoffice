<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-32 z-10 py-4"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black md:hidden opacity-50 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <img src="@/assets/img/logo-saijai.svg" />

      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-2 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <img src="@/assets/img/logo-saijai.svg" />
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="px-3 py-2 h-12 border border-solid border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form>
        <br />
        <!-- Heading -->
        <h6
          class="pl-3 md:min-w-full text-gray-600 text-xs font-bold block pt-1 pb-2 no-underline"
        >
          Main
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none cursor-pointer">
          <li class="items-center">
            <router-link
              to="/admin/tables"
              v-slot="{ href, navigate, isActive }"
            >
              <h6
                :href="href"
                @click="navigate"
                class="text-xs py-3  block"
                :class="[
                  isActive
                    ? 'bg-gray-200 pl-4'
                    : 'text-gray-400  hover:text-gray-600 pl-3',
                ]"
              >
                <i
                  class="fas fa-users mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Member
              </h6>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="/admin/dashboard"
              v-slot="{ href, navigate, isActive }"
            >
              <h6
                :href="href"
                @click="navigate"
                class="text-xs py-3  block"
                :class="[
                  isActive
                    ? 'bg-gray-200 pl-4'
                    : 'text-gray-400  hover:text-gray-600 pl-3',
                ]"
              >
                <i
                  class="fas fa-user-circle mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Administration
              </h6>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              to="/admin/settings"
              v-slot="{ href, navigate, isActive }"
            >
              <h6
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3  block"
                :class="[
                  isActive
                    ? 'bg-gray-200 pl-4'
                    : 'text-gray-400  hover:text-gray-600 pl-3',
                ]"
              >
                <i
                  class="fas fa-tools mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Settings
              </h6>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/maps" v-slot="{ href, navigate, isActive }">
              <h6
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3  block"
                :class="[
                  isActive
                    ? 'bg-gray-200 pl-4'
                    : 'text-gray-400  hover:text-gray-600 pl-3',
                ]"
              >
                <i
                  class="fas fa-map-marked mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-gray-400']"
                ></i>
                Maps
              </h6>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
); }

<script>
export default {
  data() {
    return {
      collapseShow: "hidden",
    };
  },
  methods: {
    toggleCollapseShow: function(classes) {
      this.collapseShow = classes;
    },
  },
  components: {},
};
</script>
