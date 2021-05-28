<template>
  <footer class="container">
   <div class="container">
     <div class="row">
     
      <div class="c1">
        <div>
          <img :src="logo" class="logo"/>
        </div>
        <div>
          Create, prototype, collaborate and turn your ideas into incredible products with the definitive platform for digital design.
        </div>
      </div>
      <div class="c2"> 
        <div>
          <h4>Themesberg</h4>
        </div>
        <div>
          <p>Blog</p>
        </div>
        <div>
          <p>Themes</p>
        </div>
        <div>
          <p>Contact Us</p>
        </div>
      </div>
      <div class="c3">
        <div><h4>CreativeTim</h4></div>
        <div><p>Blog</p></div>
        <div><p>Product</p></div>
        <div><p>Support</p></div>
        <div><p>License</p></div>
      </div>
      <div class="c4"> 
        <div><h4>Subscribe</h4></div>
        <div><p>The latest Impact news, articles, and resources, sent straight to your inbox every month.</p></div>
        <div>
          <form>
            <div class='form'><input type="text"/>
            <button type="submit" class="btn">Subscribe</button></div>
          </form>
        </div>
      </div>
     </div>
   </div>
   
  </footer>
</template>

<script>
import logo from '@/assets/icons/light.svg'
export default {
  name: 'Footer',
  data(){
    return{
      logo
    }
  }
}
</script>

<style scoped>
/* .footer{
  color:white;
  background-color: violet;
} */
.form{
  display: inline-flex;
  flex-direction: row;
  gap:9px;
}
.btn{  
  background-color:red;
  color:white;
  border:1px;

}
 .container{
  width:100%;
  box-sizing: border-box;
  display: flex;  
   padding-left:100px;
  padding-right:100px;
  padding-top:150px;
  background-color:darkblue;
  color: white;
} 
.describe{
  display: flex;
  flex-direction: column;
  margin: auto;
}

.row{
  display:inline-flex;  
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: left;
  gap:5px;
}

.c1{
  width:30%;
}
.c2{
  width:12%;
}
.c3{
  width:12%;
}
.c4{
  width:40%;
}
.logo{
  width:70px;
  height:50px;
  object-fit: fill;
}
.col2{
  text-align: center;
}
/* .describe{
  width:100%;
} */
/* .col1{ 
  max-width: 25%;
  text-align: left;
  box-sizing: border-box;
 } */
.list-style{
  list-style: none;
  text-align: left;
  padding-left:5px;
  padding-right:5px;
  line-height: 1.5;
}
/* .col3{
  max-width: 50%;
} */
</style>
