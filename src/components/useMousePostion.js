import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";


function useMousePostion() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    console.log('挂载函数')
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    
  })

}

