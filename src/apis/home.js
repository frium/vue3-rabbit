import httpInstance from '@/utils/http'

export function getBannerAPI(param = 1) {
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite: param
    }
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

export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}
