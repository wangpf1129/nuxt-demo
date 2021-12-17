<!-- Please remove this file from your project -->
<template>
  <div @click="testSentry">
    <nuxt-logo />
    test sentry 1125
  </div>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue'
export default {
  components: { NuxtLogo },
  data() {
    return {
      a: 123,
    }
  },
  computed: {},
  methods: {
    testSentry() {
      throw new Error('错误1125')
    },
  },
}
</script>
