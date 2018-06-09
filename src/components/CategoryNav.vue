<template>
  <div id="category-nav">
    <ul>
      <li><button @click="navigationTo('homepage')">主页</button></li>
      <li><button @click="navigationTo('programming')">编程</button></li>
      <li><button @click="navigationTo('photography')">摄影</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    navigationTo: function (key) {
      if (key === 'homepage') {
        this.$router.push('/homepage')
      } else if (key === 'programming') {
        this.$router.push('/programming')
      } else if (key === 'photography') {
        this.$router.push('/photography')
      }
    }
  }
}
</script>

<style scoped>
#category-nav {
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0,0,0, 0.1);
}
ul {
  width: auto;
  text-align: center;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  /*padding-left: 10px;
  padding-right: 10px;*/
}
ul li button {
  border: none;
  background-color: inherit;
  height: 60px;
  font-size: 15px;
  padding: 0 15px;
}
ul li button:focus {
  /*color: #ca9b52;*/
  outline: none;
}
ul li button:hover {
  color: #ca9b52;
  cursor: pointer;
}
</style>
