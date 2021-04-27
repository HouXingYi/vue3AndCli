<template>
  <div class="testcom">
    {{ testcom }} <br />
    {{ x }} <br />
    {{ y }} <br>
    {{ a }} <br />
    {{ b }} <br>
    {{ abc }}
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import useMousePostion from './useMousePostion.js'
export default {
  name: 'testcom',
  props: {},
  data () {
    return {
      abc: '2222'
    }
  },
  mounted () {
    console.log('2222')
  },
  setup () {
    const { x, y, update } = useMousePostion(0, 0)
    const { x: a, y: b } = useMousePostion(100, 100)

    setTimeout(() => {
      update({
        pageX: 100,
        pageY: 100
      })
    }, 5000)

    // const abc = ref('2222')

    onMounted(() => {
      console.log('1111')
    })

    return {
      testcom: 456,
      x,
      y,
      // abc,
      a,
      b
    }
  }
}
</script>

<style scoped lang="scss"></style>
