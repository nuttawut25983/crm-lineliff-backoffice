<template>
  <div class="container mt-3">
    <div class="px-5">
      <span class="pl-2">สมาชิกระดับ</span>
      <div class="level progress mb-2">
        <div class="progress-bar" style="width: 40%; background: #9e9e9e">
          <div class="progress-value font-bold">{{ data.level }}</div>
        </div>
        <span>อีก {{ data.point }} คะแนนเพื่ออัพเป็น {{ data.levelup }}</span>
      </div>

      <span class="pl-2">คะแนนสะสม</span>
      <div class="score progress">
        <div class="progress-bar" style="width: 20%; background: #43c506">
          <div class="progress-value pl-3">{{ `${data.score}คะแนน` }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        birthdate: "14 ก.พ. 2530",
        phone: "0XX-XXX-XXXX",
        email: "xxx_xx@gmail.com",
        age: "33",
        level: "Silver",
        point: "15,000",
        levelup: "Gold",
        score: "1,000",
      },
    };
  },
};
</script>
<style scoped>
.progress {
  background: #b7b7b7;
  height: 36px;
  border-radius: 10px;
}
.progress span {
  padding: 3%;
  padding-left: 6px;
  color: #fff;
}
.level .progress-bar {
  font-size: 18px;
  border-radius: 10px;
}

.score .progress-bar {
  border-radius: 10px;
}
.score .progress-value {
  font-size: 14px;
}

.silver-point li::before {
  background: gray;
}

@media screen and (max-width: 375px) {
  .progress span {
    padding: 1%;
  }
}
</style>
