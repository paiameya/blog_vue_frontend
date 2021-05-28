<template>
    <div class="tc">
    <div class="tool-container">
        <div class="sec1">
            <img :src="tool" />
        </div>
        <div class="content">
            <div class="lengthy">Tools to grow your traffic</div>
            <div class="lengthBreak"><p>Impact helps you learn why your competitors rank so high and what you need to do to outrank them.</p></div>
            <div>
                <form class="content">
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <button type="submit" class="blue-button">Create Your Account</button>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import tool from "@/assets/icons/hero-illustration.svg"
export default{
    name:'Tool',
    data(){
        return {
            tool
        }
    }
}
</script>
<style>
.tc{
    position:relative;
     padding-left:8rem;
  padding-right:8rem;
  padding-top: 5rem;
  background-color: rgb(248,249,250);
  padding-bottom: 16rem;
}
.blue-button{
    background-color: darkblue;
    color: white;
    height: 35px;
    border: none;
}
.content{
    width:50%;
    display:flex;
    flex-direction: column;
    gap:15px;
}
.tool-container{
    width:100%;
    display: inline-flex;
    flex-direction: row;
    
    gap:60px;
   justify-content: center;
   
}
.gap-between{
     padding-left:100px;
  padding-right:100px;
  padding-top:100px;
}
.sec1{
    width:50%;
}
.sec2{
    width:100%;
}
.lengthy{
    
    font-family: sans-serif;
    font-size:4rem;
    font-weight: 350;
}
.lengthBreak{
    
    font-family: sans-serif;
    font-size:1rem;
    font-weight: 125;
    color:#464C6C;
}
</style>