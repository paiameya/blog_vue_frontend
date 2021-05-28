<template>
<div class="header-container">
  <div class="flex-item image ">
    <img
      class="logo"
      :src="logo"  
    />
  </div>
  <div class="flex-item nav-bar">
    <Menubar :model="items" class="menu"></Menubar>
  </div>
  <div class="section-three flex-two">
  <div ><a href="https://demos.creative-tim.com/impact-design-system-pro/docs/dashboard/alerts/" style="text-decoration:none"><i class="fa fa-th"> </i>Components</a></div>
   <div ><a href="https://demos.creative-tim.com/impact-design-system-pro/docs/dashboard/alerts/" style="text-decoration:none; background-color:red;color:white"><i class="fa fa-paper-plane-o"> </i>Upgrade to Pro</a></div>
</div>
</div>
</template>

<script>
//import { useRoute, useRouter } from 'vue-router'
import logo from '@/assets/icons/logo.svg'
import Menubar from 'primevue/menubar';
export default {

  name: 'Header',
  components: {
   Menubar
  },
   data() {
        return {
            items: [

              {
                label :'Overview'
              },
                {
                   label:'Front Pages',                  
                   items:[
                      {
                         label:'Landing',                           
                          to: "/"                          

                        
                      },
                      {
                         label:'About',
                           to: "/about" 
                         
                      },
                      
                      {
                         label:'Pricing',   
                           to: "/pricing"                      
                      },
                      {
                         label:'Contact',   
                           to: "/contact"                      
                      }
                   ]
                },
            ],
            scrollHeight : 0,
            logo
        }
    },
  methods: {
  }
}
</script>

<style >
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.p-menubar{
border:0px;
}
.flex-two{
  display:flex;
  flex-direction: row;
  gap:8px;
  justify-content: stretch;
}
.header-container{
  display:inline-flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background-color: rgb(248,249,250);
  padding-left:8rem;
  padding-right:8rem;
  padding-top:1rem;
  padding-bottom:1rem;
}

.flex-item{
  flex:1
}
.image{
  flex:0.5
}
.nav-bar{
  flex:4
}
.section-three{
  flex:2;
  box-sizing: border-box;
  line-height: 1.5rem;

}
.components{
  flex:1;
  border-color:blue ;
  box-sizing: border-box;
  line-height: 1.5rem;
}
.upgrade{
  line-height:10px;
}
.logo{
  width:100px;
  height :50px;
  object-fit: fill;
}
</style>
