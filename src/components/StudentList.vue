<template>
  <div class="container">
    <search-bar
      placeholder="Name"
      ref="input"
      :value="value"
      data="name"
      @input="onChange"
    />
    <search-bar
      placeholder="Tag"
      ref="input"
      :value="value"
      data="tag"
      @input="onChange"
    />
    <student-card :students="students" />
  </div>
</template>

<script>
import APIService from "@/services/APIService.js";
import SearchBar from "./SearchBar.vue";
import StudentCard from "./StudentCard.vue";

export default {
  name: "StudentList",
  props: {
    value: [String, Number],
  },
  components: {
    SearchBar,
    StudentCard,
  },
  data() {
    return {
      search: "",
      students: [],
      originalArr: [],
      filtername: "",
      filtertag: "",
    };
  },
  created() {
    APIService.getStudents()
      .then((response) => {
        this.students = response.data.students;
        this.originalArr = this.students;
      })
      .catch((error) => {
        console.log("There was an error: " + error.response);
      });
  },
  methods: {
    onChange(value) {
      if (typeof value.search != undefined && typeof value.data != undefined) {
        const searchType = value.data;
        if (searchType == "name") {
          this.filtername = value.search;
        } else {
          this.filtertag = value.search;
        }

        this.filterstudents(this.filtername, this.filtertag);
      }
    },
    filterstudents(fname, ftag) {
      let filterArr = this.originalArr;
      if (fname == "" && ftag == "") {
        filterArr = this.originalArr;
      } else if (ftag == "" && fname != "") {
        filterArr = filterArr.filter((student) => {
          return (
            student.firstName
              .toLowerCase()
              .indexOf(fname.toString().toLowerCase()) > -1 ||
            student.lastName
              .toLowerCase()
              .indexOf(fname.toString().toLowerCase()) > -1
          );
        });
      } else if (fname == "" && ftag != "") {
        filterArr = filterArr.filter((student) => {
          if (student.tags != undefined) {
            for (var i = 0; i < student.tags.length; i++) {
              if (student.tags[i].indexOf(ftag.toString().toLowerCase()) > -1)
                return true;
              else
                continue;
            }
          }
        });
      } else {
        filterArr = filterArr.filter((student) => {
          if (student.tags != undefined) {
            for (var i = 0; i < student.tags.length; i++) {
              if ((student.tags[i].indexOf(ftag.toString().toLowerCase()) > -1) &&
                  (student.firstName
                  .toLowerCase()
                  .indexOf(fname.toString().toLowerCase()) > -1 ||
                  student.lastName
                    .toLowerCase()
                    .indexOf(fname.toString().toLowerCase()) > -1)){
                      return true
                    }
                    else{
                      continue;
                    }
            }
          }
        });
      }
      return (this.students = filterArr);
    },
  },
  computed: {},
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 70px 300px 100px 300px;
  border-radius: 5px;
  overflow-y: scroll;
  background: white;
  max-height: 750px;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.container hr {
  color: #d6d6d6;
  background-color: #d6d6d6;
}
/* Change margins on smaller screens to prevent text squeeze */
@media only screen and (max-width: 1200px) {
  .container {
    margin: 70px 100px 100px 100px;
  }
}
</style>