<template>
  <div id="app">
    <div class="profile-content">
      <Profile></Profile>
    </div>
    <div class="blog-content">
      <img src="./assets/logo.png">
      <router-view/>
      <el-button type="primary" plain>主要按钮</el-button>
    </div>
  </div>
</template>

<script>

import Profile from './components/Profile'

export default {
  name: 'App',

  components: {
    Profile
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.profile-content {
}
.blog-content {
  width: 80%;
}
</style>
