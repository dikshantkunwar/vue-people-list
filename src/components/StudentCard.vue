<template>
  <div class="container-outer">
    <div class="student-details" v-for="student in students" :key="student.id">
      <avatar :avimage="student.pic" />
      <student-details :student="student"/>
      <hr />
    </div>
  </div>
</template>
<script>
import Avatar from "./Avatar.vue";
import StudentDetails from "./StudentDetails.vue"

export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
  },
  components: {
    Avatar,
    StudentDetails
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.container-outer {
  width: 100%;
}
.student-details {
  width: 100%;
}
.student-details p {
  padding: 0px;
}

hr {
  color: #d6d6d6;
  background-color: #d6d6d6;
}
</style>