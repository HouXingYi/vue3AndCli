<template>
  <div class="testvue3">
    {{count}}
    <Vue3com></Vue3com>
  </div>
</template>

<script>

import Vue3com from '@/components/Vue3com.vue'

export default {
  name: "testvue3",
  components: {
    Vue3com
  },
  data() {
    return { 
      count: 4 
    }
  },
  methods: {
    increment() {
      // `this` 指向该组件实例
      this.count++
    }
  }
};
</script>
