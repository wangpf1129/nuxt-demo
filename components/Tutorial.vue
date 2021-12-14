<!-- Please remove this file from your project -->
<template>
  <div @click="testSentry">
    <nuxt-logo />
    test sentry 15:37
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
      setTimeout(function () {
        this.a.b = 'type error'
      }, 1000)
    },
  },
}
</script>
