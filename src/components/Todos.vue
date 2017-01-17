<template>
  <div>
    <div>Msg: {{msg}}</div>
  </div>
</template>
<style>
  body{
    background-color:#ff0000;
  }
</style>
<script>
  export default {
    data () {
      return {
        msg: 'Todos aqui'
      }
    },
    created () {
      console.log('Provant que va!')
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        return this.fetchPage(1)
      },
      fetchPage: function (page) {
        this.$http.get('http://todos.dev:8080/api/v1/task?pages=' + page).then((response) => {
          console.log(response.data)
          this.todos = response.data.data
        }, (response) => {
          console.log(response.data)
        })
      }
    }
  }
</script>
