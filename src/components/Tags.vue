<template>
  <div class="tag-container">
    <div v-for="tag in tags" :key="tag._id" class="tag">
      <span> {{ tag }} </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tags: Array,
  },
};
</script>

<style scoped>
.tag-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 -5px;
}
.tag {
  height: 25px;
  width: fit-content;
  background: #efefef;
  border-radius: 5px;
  padding: 5px;
  margin: 0 5px;
}
span {
  line-height: normal;
}
</style>