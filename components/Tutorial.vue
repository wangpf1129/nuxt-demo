<template>
  <div class="center">
    <nuxt-logo />
    <h2>hello docker!</h2>
    <h3>the project in docker running!</h3>
  </div>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue'
export default {
  components: { NuxtLogo },
  data() {},
  computed: {},
  methods: {
  },
}
</script>

<style>
.center{
  display: block;
  text-align: center;
}
</style>
