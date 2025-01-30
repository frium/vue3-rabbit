import httpInstance from '@/utils/http'

export function getCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}

export const getCategoryListAPI = (data) => {
  return httpInstance({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })

}
