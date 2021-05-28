<template>
  <PreLoader />
  <Account />
  <Platform />
  <Growth />
  <Footer />
</template>

<script>
import PreLoader from '@/components/PreLoader'
import Account from '@/components/Account'
import Platform from '@/components/Platform'
import Growth from '@/components/Growth'
import Footer from '@/components/Footer'
export default {
  components: {
    PreLoader,
    Account,
    Platform,
    Growth,
    Footer,
  },
}
</script>

<style scoped></style>
