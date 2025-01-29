import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    app.directive('lazy', {
      mounted(el) {
        if (!el.dataset.lazy) { // 避免重复处理
          el.dataset.lazy = 'true';
          const src = el.getAttribute('src');
          el.setAttribute('data-src', src);
          el.removeAttribute('src'); // 移除 src
          el.src = ''; // 占位图

          const { stop } = useIntersectionObserver(el, ([entry]) => {
            if (entry.isIntersecting) {
              el.src = el.getAttribute('data-src'); // 加载真正的图片
              stop();
            }
          });
        }
      }
    });
  }
}
