<template>
  <div>
    <sidebar />
    <div class="relative md:ml-52 bg-gray-200" :class="fullwidth? 'relative bg-gray-200' : '' ">
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <!-- <footer-admin /> -->
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
// import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout",
  data() {
    return {
      fullwidth: false
    }
  },
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    // FooterAdmin,
  },
  mounted() {
    this.$parent.$on('toggleNav', () => {
      console.log("wwwww")
      this.fullwidth = true

    })
  }
};
</script>
