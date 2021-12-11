<template>
    <div class="avatar">
        <img class="avatar-image" v-lazy="avimage" />
      </div>
</template>

<script>
export default {
    name: "Avatar",
    props:{
        avimage: String
    }
}
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: solid 1px #8d8d8d75;
  float: left;
  margin: 30px 0 0 15px;
}
.avatar-image {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}
</style>