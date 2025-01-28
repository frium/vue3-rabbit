import httpInstance from '@/utils/http'

export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
  })
};
export function getNewGoodsAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

export function getHotGoodsAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}
