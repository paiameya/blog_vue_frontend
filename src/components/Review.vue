<template>
    <div class="user-review">
     <div><img :src="userpic" class="userPic"/> </div>
     <div class="review-card">
        <div> <span v-for="n in rating" :key="n" v-bind:index="n"><i class="fa fa-star text-warning"/></span></div>
        <div><p><q>{{review}}</q></p></div>
        <div><p>{{name}} {{role}}</p></div>
     </div>

    </div>
</template>
<script>
import userpic from '@/assets/userpic.jpeg'
export default{
    name:'Review',
    props:{
        rating:{type:Number,default:0},
        review:{ type:String},
        name:{ type:String},
        role:{ type:String}
    },
    data(){
        return{
            userpic
        }
    }
}
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.review-container{
    display:inline-flex;
flex-direction: row;
gap:5px;
}
.user-review{
    display:flex;
    flex-direction: row;
    gap:10px;
}
.review-card{
    box-sizing: border-box;
    padding:7px;
    border:#e0e6ec;
    background-color:rgb(248,249,250);
}
.c1{
      display:inline-flex;
flex-direction: column;
}
.c2{
      display:inline-flex;
flex-direction: column;
}
.userPic{
    width:40px;
    height:40px;
    object-fit: fill;
    border-radius: 50%;
}
.text-warning{
    color: #f5b759 !important;
}
.column-flex{
        display:inline-flex;
flex-direction: column;
}



</style>
