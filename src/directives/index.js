import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    app.mixin({
      mounted() {
        this.$nextTick(() => {

          try {
            const imgs = this.$el.querySelectorAll('img');

            imgs.forEach(img => {
              if (!img.dataset.lazy) { // 避免重复处理
                img.dataset.lazy = 'true'; // 标记已处理
                const src = img.getAttribute('src'); // 获取原始 src
                img.setAttribute('data-src', src); // 存储到 data-src
                img.removeAttribute('src'); // 清空 src，避免预加载
                img.src = ''; // 占位图
                const { stop } = useIntersectionObserver(img, ([entry]) => {
                  if (entry.isIntersecting) {
                    img.src = img.getAttribute('data-src'); // 恢复真正的图片
                    stop();
                  }
                });
              }
            });
          } catch (error) { }
        });
      }
    });
  }
}
