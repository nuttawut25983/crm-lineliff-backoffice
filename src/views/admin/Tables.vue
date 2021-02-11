<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 px-4">
      <card-table />
    </div>
  </div>
</template>
<script>
import CardTable from "@/components/Cards/CardTable.vue";

export default {
  components: {
    CardTable,
  },
};
</script>
