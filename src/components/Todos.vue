<template>
    <div>
        <div v-show="!authorized">
            <md-button class="md-raised md-warn">Connect</md-button>
        </div>
        <div v-show="!logut">
            <md-button class="md-raised md-warn">Log out</md-button>
        </div>
        <ul v-show="!authorized">
            <li vi-for></li>
        </ul>
    </div>
</template>
<style>
  body{
    background-color:#ff0000;
  }

</style>
<script>
  var STORAGE_KEY = 'todosvue_token'
  var AUTH_CLIENT_ID = 5
  var AUTH_REDIRECT_URI = ''

  export default {
    data () {
      return {
        todos: [],
        authorized: false
      }
    },
    created () {
      var token = extractToken(document.location.hash)
      console.log(token)
      if (token) this.saveToken(token)
      console.log(this.fetchToken)
      if(this.fetchToken()){
        this.authorized = true
      } else {
        this.authorized = false
      }
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
      },
      extractToken : function (hash) {
        var match = has.match(/acces_token=(\w+)/)
        return !!match && match[1]
      },
      connect : function() {
        console.log('do conect here!')
        query = [
          client_id: AUTH_CLIENT_ID,
          redirect_uri: AUTH_REDIRECT_URI,
          response_type: 'token',
          scope: ''
        ]
        var query = window.querystring.stringify(query)
        window.location.replace('http://todos.dev:8080/oauth/authorize?' + query)
      },
      fetchToken : function () {
        return window.localStorage.getItem(STORAGE_KEY)
      },
      saveToken : function () {
        window.localStorage.setItem(STORAGE_KEY, token)
      }
    }
  }

</script>
