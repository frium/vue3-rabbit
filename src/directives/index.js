import { useIntersectionObserver } from '@vueuse/core'

//懒加载
export const lazyPlugin = {
  install(app) {
    //定义全局指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([entry]) => {
          if (entry.isIntersecting) {
            el.src = binding.value;
            stop();
          }
        });
      }
    });


  }
}
