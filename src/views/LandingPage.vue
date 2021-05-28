<template>
  <Preloader />
  <CreateAccount />
  <Footer />
</template>

<script>
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import CreateAccount from '@/components/CreateAccount'
export default {
  components: {
    Preloader,
    Footer,
    CreateAccount
  },
}
</script>
<style scoped>

</style>
