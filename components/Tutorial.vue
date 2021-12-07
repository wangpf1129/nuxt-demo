<!-- Please remove this file from your project -->
<template>
  <div @click="testSentry">nuxt demo 1</div>
</template>

<script>
export default {
  data() {
    return {
      a: 123,
    }
  },
  methods: {
    testSentry() {
      setTimeout(function () {
        this.a.b = 'type error'
      }, 1000)
    },
  },
}
</script>
