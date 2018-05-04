<template>
  <div id="profile">
    <img class="avatar" src="../assets/avatar.jpg">
    <div class="desc">
      <h3 class="name">Joker</h3>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#profile {
  height: 140px;
  width: 100%;
  background-color: #f0f0f0;
}
.desc {
  float: left;
  margin-left: 30px;
  margin-top: 30px;
  position: relative;
}
.desc .name {
  font-size: 16px;
}
.avatar {
  float: left;
  width: 80px;
  height: 80px;
  margin-top: 30px;
  margin-left: 30px;
  position: relative;
}
</style>
