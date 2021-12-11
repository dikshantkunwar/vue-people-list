<template>
  <div id="app">
    <StudentList />
  </div>
</template>

<script>
import StudentList from '@/components/StudentList.vue'

export default {
  name: 'App',
  components: {
    StudentList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
body{
  background: #efefef;
}
#app {
  background: #efefef;
  font-family: 'Raleway', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
}
input:focus{
    border-bottom-color: black ;
}
</style>
