<template>
  <div class="home">
    <el-button type="primary">el-button</el-button>

    <el-input v-model="input" placeholder="请输入内容" :style="{width: '500px', marginLeft: '20px'}" clearable></el-input>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

export default {
  name: 'Home',
  components: {
  },
  watch: {
    input (a, b) {
      console.log('testVal', a, b)
    }
  },
  setup () {
    const input = ref('')

    watch(input, (newVal, oldVal) => {
      console.log('val', newVal, oldVal)
    })

    return {
      input
    }
  }
}
</script>
