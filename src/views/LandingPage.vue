<template>
    <div class="container">
        <Header />
        <div class="scro">
            
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {

    components: {
        Header,
        Footer,
    }

}
</script>
<style scoped>
.container{
    display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.scro{
    flex: 1;
}
/* .scro {
    overflow-y: auto;
}
.container {
    height: 100%;
}
Header{
    position: absolute;
    width: 100%;
    top: 0;
}
Footer {
 position: absolute;
 bottom: 0;
 width: 100%;

} */
</style>