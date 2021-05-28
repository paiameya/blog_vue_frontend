<template>
  <div id="landingPage" class="container">
    <Header />  
  <Tool />  
  <Platform/>
  <ReviewList :title="title"/>
  <Footer /> 
  </div>
</template>
<script>
import Header from '@/components/Header'
import Tool from '@/components/Tool'
import Platform from '@/components/Platform'
// import Review from '@/components/Review'
import ReviewList from '@/components/ReviewList'
//import BlogCategoryList from '@/components/BlogCategoryList'
//import TopLikedBlogList from '@/components/TopLikedBlogList'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
   Footer,
   Tool,
   Platform,
  // Review,
   ReviewList
  
  },
  data(){
    return {
      text:"review text",
      name:"user name",
      role:"role",
      title:"Recommended by leading experts in marketing and SEO "
    }
  },
  mounted(){
   // let scroll=0


  }
}
</script>
<style>

 .container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
 
} 


/* .content {
  flex-grow: 1;
  margin-bottom: 1em;
}

@media (min-width: 850px) {
  .content {
    margin: auto 19em;
  }*/
@media only screen and (min-width: 375px) {
  
  .container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
 
} 
    
  
} 
</style>
