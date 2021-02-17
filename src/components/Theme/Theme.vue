<template>
  <div class="container">
    <v-calendar class="custom-calendar max-w-full max-h-full" :attributes="attrs"/>
  </div>
</template>
<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
export default {
  data() {
    return {
      //   attrs: [
      //     {
      //       highlight: true,
      //       dates: { start: "2020-02-05T10:00:00Z", end: "2020-02-09T09:00:00Z" },
      //     },
      //     {
      //       dot: "pink",
      //       dates: "2020-02-01T18:00:00Z",
      //     },
      //     {
      //       dot: "indigo",
      //       dates: "2020-02-11T19:00:00Z",
      //     },
      //     {
      //       dot: "indigo",
      //       dates: "2020-02-15T01:00:00Z",
      //     },
      //     {
      //       dot: "red",
      //       dates: "2020-02-21T05:00:00Z",
      //     },
      //     {
      //       dot: "green",
      //       dates: "2020-02-21T00:00:00Z",
      //     },
      //     {
      //       dot: "blue",
      //       dates: "2020-02-29T03:00:00Z",
      //     },
      //   ],
      selectAttribute: {
        highlight: true,
      },
      attrs: [
        {
          highlight: true,
          dates: { start: "2021-02-05T10:00:00Z", end: "2021-02-09T09:00:00Z" },
        },
        {
          dot: "pink",
          dates: "2021-02-01T18:00:00Z",
        },
        {
          dot: "indigo",
          dates: "2021-02-11T19:00:00Z",
        },
        {
          dot: "indigo",
          dates: "2021-02-15T01:00:00Z",
        },
        {
          dot: "red",
          dates: "2021-02-21T05:00:00Z",
        },
         {
          dot: "orange",
          dates: "2021-02-21T00:00:00Z",
        },
         {
          dot: "yellow",
          dates: "2021-02-21T00:00:00Z",
        },
        {
          dot: "green",
          dates: "2021-02-21T00:00:00Z",
        },
        {
          dot: "blue",
          dates: "2021-02-29T03:00:00Z",
        },
      ],
    };
  },
  components: {
    Calendar,
  },
  methods: {
    handleClick(day) {
      console.log(day.id);
      alert(day.id);
    },
  },
};
</script>
<style>
</style>
// gray red orange yellow green