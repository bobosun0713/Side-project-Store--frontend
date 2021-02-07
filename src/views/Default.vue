<template>
  <div class="default">
    <default-header></default-header>
    <router-view></router-view>
    <sub-scription></sub-scription>
    <default-footer></default-footer>
  </div>
</template>

<script>
import DefaultHeader from '@/components/layout/Header.vue'
import SubScription from '@/components/layout/SubScription.vue'
import DefaultFooter from '@/components/layout/Footer.vue'
export default {
  name: 'Home',
  components: {
    DefaultHeader,
    SubScription,
    DefaultFooter,
  },
}
</script>

<style lang="scss"></style>
