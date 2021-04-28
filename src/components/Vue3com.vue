<template>
  <div class="testcom">
    <button @click="reset" :style="{ margin: '20px' }">reset按钮</button> <br>
    {{ testcom }} <br />
    {{ x }} <br />
    {{ y }} <br>
    {{ xc }} <br />
    {{ yc }} <br>
    {{ a }} <br />
    {{ b }} <br>
    {{ abc }}
  </div>
</template>

<script>
import {
  onMounted
  // ref
} from '@vue/runtime-core'
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
    const {
      x, y,
      update,
      xcomputed, ycomputed
    } = useMousePostion(0, 0)
    const { x: a, y: b, update: update2 } = useMousePostion(100, 100)

    // const abc = ref('2222')

    onMounted(() => {
      console.log('1111')
    })

    function reset () {
      console.log('reset')
      setTimeout(() => {
        update({
          pageX: 100,
          pageY: 100
        })
        update2({
          pageX: 666,
          pageY: 999
        })
      }, 1000)
    }

    return {
      testcom: 456,
      x,
      y,
      // abc,
      a,
      b,
      xc: xcomputed,
      yc: ycomputed,
      reset
    }
  }
}
</script>

<style scoped lang="scss"></style>
