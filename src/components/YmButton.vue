<template>
    <button class="layui-btn" @click="clickHandler">
        <slot></slot>
    </button>
</template>

<script>
 export default {
   name:'v-button',
   data(){
     return {
         
     }
   },
   created(){

   },
   mounted(){

   },
   methods:{
    clickHandler(){
        this.$emit('click');
    }
   },
   computed:{

   }
 }
</script>