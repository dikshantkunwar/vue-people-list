<template>
    <div class="search-container">
            <input 
            type="text" 
            class="search-input" 
            @input="handleInput"
            :placeholder="'Search by ' +  placeholder "
            /> 
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props:{
        placeholder: String,
        data: String
    },
    data(){
        return{
            search: ''
        }
    },
    methods: {
        handleInput (event) {
            //this.$emit('input', event.target.value)
            this.$emit('input',{search: event.target.value, data: this.data})
        },
    }
}

</script>

<style scoped>
.search-container{
    display: flex;
    float: left;
    width: 98%;
    padding-bottom: 10px;
}
.search-input{
    width: 100%;
    border-width: 0 0 2px 0;
    outline: 0;
    height: 50px;
    font-size: large;
    border-color: #d6d6d6;
} 
input:focus{
    border-bottom-color: black ;
}
</style>