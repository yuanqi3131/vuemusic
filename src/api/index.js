import ajax from './ajax'

const BASE_URL = 'http://192.168.1.106:3000'
export const resBanners = () => ajax(BASE_URL + '/banner')
export const resRecommendList = () => ajax(BASE_URL + '/personalized')
export const resAnchorRadios = () => ajax(BASE_URL + '/program/recommend')
export const resAllRankList = () => ajax(BASE_URL + '/toplist/detail')
export const resSupremeMusic = () => ajax(BASE_URL + '/top/playlist/highquality')
export const resMusicList = (limit, offset) => ajax(BASE_URL + '/top/playlist', {'limit': limit, 'offset': offset})
export const resMusicListInfo = (id) => ajax(BASE_URL + '/playlist/detail?id=' + id + '')
export const MobileLogin = (phone, password) => ajax(BASE_URL + '/login/cellphone', {phone, password}, 'POST')
export const resUserDetail = (uid) => ajax(BASE_URL + '/user/detail?uid=' + uid + '')
export const resHotSearch = () => ajax(BASE_URL + '/search/hot')
export const resHotSinger = () => ajax(BASE_URL + '/top/artists')
export const resSingerList = () => ajax(BASE_URL + '/artist/list')
export const resUserSongList = (uid) => ajax(BASE_URL + '/user/playlist?uid=' + uid + '')
export const resSearchList = (keywords, limit, offset, type) => ajax(BASE_URL + '/search', {'keywords': keywords, 'limit': limit, 'offset': offset, 'type': type})
