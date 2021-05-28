<template>
<div class="rl">
<div id="container">
    
  <div class="small-width">
      <h1>{{title}}</h1>
  </div>
  <div>
      <p class="grey-text">Our products are loved by users worldwide</p>
  </div>
    
</div>
<div class="review-list-container">
    
    <div class="review-container side-by-side">
        <div class="c1">
            
             <Review :rating="reviews[0].rating" :review="reviews[0].text" :name="reviews[0].name" :role="reviews[0].role"/>
              <Review :rating="reviews[1].rating" :review="reviews[1].text" :name="reviews[1].name" :role="reviews[1].role"/>
        </div>
        <div class="c1">
             <Review :rating="reviews[2].rating" :review="reviews[2].text" :name="reviews[2].name" :role="reviews[2].role"/>
              <Review :rating="reviews[3].rating" :review="reviews[3].text" :name="reviews[3].name" :role="reviews[3].role"/>
        </div>
    </div>
</div>
</div>
</template>
<script>
import userpic from '@/assets/userpic.jpeg'
import Review from '@/components/Review'
export default{
    name:'ReviewList',
    components:{
       Review
    },
    props:{
        title:{ type:String}
    },
    data(){
        return{
            userpic,
        reviews:[
            {   text:"We use Impact mainly for its site explorer, and it’s immensely improved how we find link targets. We use it both for getting quick analysis of a site, as well as utilizing its extensive index when we want to dive deep.",
                name:"James Curran",
                role:"General Manager Spotify",
                rating:5
            },
              {   text:"We use Impact mainly for its site explorer, and it’s immensely improved how we find link targets. We use it both for getting quick analysis of a site, as well as utilizing its extensive index when we want to dive deep.",
                name:"James Curran",
                role:"General Manager Spotify",
                rating:5
            },
              {   text:"We use Impact mainly for its site explorer, and it’s immensely improved how we find link targets. We use it both for getting quick analysis of a site, as well as utilizing its extensive index when we want to dive deep.",
                name:"James Curran",
                role:"General Manager Spotify",
                rating:5
            },
              {   text:"We use Impact mainly for its site explorer, and it’s immensely improved how we find link targets. We use it both for getting quick analysis of a site, as well as utilizing its extensive index when we want to dive deep.",
                name:"James Curran",
                role:"General Manager Spotify",
                rating:5
            },
           
          
        ]    
            
        }
    }
}
</script>
<style>

.container1{
    max-width: 1140px;
}
</style>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.small-width{
    width:70%;
    
}
#container { 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#content {
  background: #06c;
}
.rl{
    padding-left:8rem;
  padding-right:8rem;
  padding-bottom: 5rem;
}
.heading{   
    display:flex;   
   flex-direction: column;
    justify-content: center;
}
.review-container{
    display:flex;
flex-direction: row;
gap:2rem;

}

.gap-between{
    padding-left:250px;
  padding-right:100px;
  padding-top:150px;
}
.grey-text{
    color: #4A5073;
}
.c1{
      display:inline-flex;
flex-direction: column;
gap:6rem;
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
.break-small{
    width:70%;
    line-height: 1.5;
    font-family: sans-serif;
}




</style>

