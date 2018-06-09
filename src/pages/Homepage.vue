<template>
  <div id="homepage">
    主页
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      posts: [],
      pages: 0,
      page: 0,
      count: 0,
      count_total: 0
    }
  },
  created () {
    this.refreshPage()
  },
  methods: {
    refreshPage () {
      const url = '/api/get_recent_posts/'
      fetch(url, {
        method: 'GET'
        // credentials: 'same-origin'
      }).then((res) => {
        res.json().then((json) => {
          this.pages = json.pages
          this.posts = json.posts
          this.count = json.count
          this.count_total = json.count_total
        })
      })
    }
  }
}
</script>
