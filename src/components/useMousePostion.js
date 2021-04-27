import { ref } from '@vue/reactivity'
import { onMounted, onUnmounted, onUpdated, watchEffect } from '@vue/runtime-core'
function useMousePostion (xoffset, yoffset) {
  const x = ref(0)
  const y = ref(0)

  function update (e) {
    x.value = e.pageX + xoffset
    y.value = e.pageY + yoffset
  }

  onMounted(() => {
    console.log('挂载函数')
    // window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    console.log('卸载函数')
    // window.removeEventListener('mousemove', update)
  })

  onUpdated(() => {
    console.log('函数内更新')
  })

  watchEffect((newValue, oldValue) => {
    console.log('watchEffect ', newValue, oldValue)
  })

  return {
    x,
    y,
    update
  }
}

export default useMousePostion
