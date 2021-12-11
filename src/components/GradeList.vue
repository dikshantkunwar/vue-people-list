<template>
<div>
    <ul>
    <li v-for="(grade, index) in grades" :key="grade.id">
      Test {{ index + 1 }} :  {{ grade }}
    </li>
  </ul>
</div>

</template>

<script>
export default {
  props: {
    grades: {
      type: Array,
      required: true,
    },
  },
  components: {},
  data() { return{ grade: ''}},
  computed: {},
};
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: left;
    padding-left: 0;
}
div{
    line-height: normal;
}
</style>