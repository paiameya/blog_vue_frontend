<template>
  <PreLoader />
  <Account />
  <Platform />
</template>

<script>
import PreLoader from '@/components/PreLoader'
import Account from '@/components/Account'
import Platform from '@/components/Platform'
export default {
  components: {
    PreLoader,
    Account,
    Platform,
  },
}
</script>

<style scoped></style>
