import ajax from './ajax'

const BASE_URL = 'http://192.168.1.101:3000'
export const resBanners = () => ajax(BASE_URL + '/banner')
export const resRecommendList = () => ajax(BASE_URL + '/personalized')
