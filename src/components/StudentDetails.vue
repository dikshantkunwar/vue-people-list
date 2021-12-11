<template>
  <div>
    <div class="button-expand">
      <button @click="showgrades()">
        <font-awesome-icon :icon="myIcon" />
      </button>
    </div>

    <div class="misc-details">
      <header class="name-title">
        <strong>
          <p>
            {{ student.firstName.toUpperCase() }}
            {{ student.lastName.toUpperCase() }}
          </p>
        </strong>
      </header>
      <p>Email: {{ student.email }}</p>
      <p>Company: {{ student.company }}</p>
      <p>Skill: {{ student.skill }}</p>
      <p>Average: {{ gradeAverage(student.grades) }}</p>

      <grade-list :grades="student.grades" v-show="gradeListDisplay" />
      <tags v-if="student.tags" :tags="student.tags" />
      <tag-input @newtag="newtag" :student="student" />
    </div>
  </div>
</template>

<script>
import GradeList from "./GradeList.vue";
import TagInput from "./TagInput.vue";
import Tags from "./Tags.vue";
export default {
  name: "StudentDetails",
  data() {
    return {
      myIcon: ["fas", "plus"],
      gradeListDisplay: false,
    };
  },
  components: {
    GradeList,
    TagInput,
    Tags,
  },
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  methods: {
    gradeAverage: function (grades) {
      let sum = 0;
      for (var i = 0; i < grades.length; i++) {
        sum += parseInt(grades[i], 10);
      }
      return sum / grades.length + "%";
    },
    showgrades: function () {
      if (this.myIcon[1] == "plus") {
        this.myIcon = ["fas", "minus"];
        this.gradeListDisplay = true;
      } else {
        this.myIcon = ["fas", "plus"];
        this.gradeListDisplay = false;
      }
    },
    newtag: function (tagvalue) {
      if (this.student.tags != undefined) {
        this.student.tags.push(tagvalue.tag);
      } else {
        this.$set(this.student, "tags", [tagvalue.tag]);
      }
    },
  },
};
</script>

<style scoped>
.misc-details {
  display: flex;
  align-items: left;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 120px;
  line-height: 0;
}
.button-expand {
  float: right;
  margin: 30px 15px 15px 10px;
}
.button-expand button {
  border: 0;
  background: none;
  color: grey;
  font-size: xx-large;
}
.name-title {
  font-size: 30px;
}
</style>