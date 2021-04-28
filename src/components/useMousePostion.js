import { ref } from '@vue/reactivity'
import {
  computed,
  onMounted,
  onUnmounted,
  // onUpdated,
  // watchEffect,
  watch
} from '@vue/runtime-core'
function useMousePostion (xoffset, yoffset) {
  // console.log('this222', this)
  const x = ref(0)
  const y = ref(0)

  function update (e) {
    x.value = e.pageX + xoffset
    y.value = e.pageY + yoffset
  }

  onMounted(() => {
    console.log('挂载函数')
    window.addEventListener('mousemove', update)
  })

  const xcomputed = computed(() => x.value * 2)
  const ycomputed = computed(() => y.value * 2)

  onUnmounted(() => {
    console.log('卸载函数')
    window.removeEventListener('mousemove', update)
  })

  watch(x, (newValue, oldValue) => {
    // console.log('watchEffect ', newValue, oldValue)
  })

  return {
    x,
    y,
    update,
    xcomputed,
    ycomputed
  }
}

export default useMousePostion
