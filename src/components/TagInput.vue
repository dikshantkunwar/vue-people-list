<template>
    <div class="tag-input-container">
        <input type="text"
        class="tag-input"
        @keyup.enter="handletaginput"
        placeholder="Add a tag"
        />
    </div>
</template>

<script>
export default {
    name: 'TagInput',
    props:{
        student: {
            type: Object
        }
    },
    data(){
        return{}
    },
    methods:{
        handletaginput: function(event){
            this.$emit('newtag',{tag: event.target.value, id: this.student.id})
            event.target.value = ""
        }
    }
}
</script>

<style scoped>
.tag-input-container{
    padding-top: 10px;
    padding-bottom: 10px;
}
.tag-input{
    border-width: 0 0 2px 0;
    outline: 0;
}
</style>