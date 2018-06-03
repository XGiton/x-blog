<template>
  <div id="profile">
    <div class="inner">
      <div class="profile">
        <img class="avatar" src="../assets/avatar.jpg">
        <h1 class="name">Joker</h1>
        <h3 class="description">一个无聊的程序员</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#profile {
  width: 100%;
  background-color: #f0f0f0;
  background-image: url('../assets/header_bg.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size:100% 100%;
  background-position: center;
  height: 420px;
}
.inner {
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
}
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
}
.profile .avatar {
  width: 80px;
  height: 80px;
  margin-top: 180px;
  border-radius: 50%;
  -moz-border-radius: 50%;
}
.profile .name {
  z-index: 10;
  line-height: 1.15;
  margin: 0;
  padding: 15px 0 0;
  opacity: 0.8;
  font-size: 32px;
}
.profile .description {
  z-index: 10;
  padding: 8px 0;
  font-weight: 300px;
  letter-spacing: 0.5px;
  opacity: 0.8;
  line-height: 1.2;
  margin: 0;
  opacity: 0.7;
}
.nav {
  width: auto;
}
.nav .nav-items {
  align-items: center;
  overflow-x: auto;
  padding-bottom: 80px;
  letter-spacing: 0.4px;
  white-space: nowrap;
  display: flex;
  overflow-y: hidden;
}
</style>
