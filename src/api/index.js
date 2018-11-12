import ajax from './ajax'

const BASE_URL = 'http://192.168.1.105:3000'
export const resBanners = () => ajax(BASE_URL + '/banner')
export const resRecommendList = () => ajax(BASE_URL + '/personalized')
export const resAnchorRadios = () => ajax(BASE_URL + '/personalized/djprogram')
export const resAllRankList = () => ajax(BASE_URL + '/toplist/detail')
export const resSupremeMusic = () => ajax(BASE_URL + '/top/playlist/highquality')
export const resMusicList = () => ajax(BASE_URL + '/top/playlist')
export const resMusicListInfo = (id) => ajax(BASE_URL + '/playlist/detail?id=' + id + '')
