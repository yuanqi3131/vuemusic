import {
  RECEIVE_BANNERS,
  RECEIVE_RECOMMEND_LIST,
  RECEIVE_ANCHOR_RADIOS,
  RECEIVE_ALL_RANK_LIST,
  RECEIVE_SUPREME_MUSIC,
  RECEIVE_MUSIC_LIST, RECEIVE_MUSIC_LIST_INFO,
  RECEIVE_USER_INFO,
  RECEIVE_USER_DETAIL,
  RECEIVE_HOT_SEARCH,
  RECEIVE_HOT_SINGER,
  RECEIVE_SINGER_LIST,
  RECEIVE_USER_SONG_LIST,
  RECEIVE_SEARCH_LIST,
  RECEIVE_SEARCH_SONGS,
  RECEIVE_CLEAN_SONG,
  RECEIVE_RECOMMEND_DJ,
  RECEIVE_PAY_GIFT,
  RECEIVE_RADIO_CATEGORY
} from './mtations-type'
import {
  resBanners,
  resRecommendList,
  resAnchorRadios,
  resAllRankList,
  resSupremeMusic,
  resMusicList,
  resMusicListInfo,
  resHotSearch,
  resHotSinger,
  resSingerList,
  resSearchList,
  resRecommendDj,
  resPayGift,
  resRadioCategory,
  resRadioCategoryRecommend
} from '../api'

export default {
  async getBanners ({commit}) {
    const result = await resBanners()
    if (result.code === 200) {
      const banners = result.banners
      commit(RECEIVE_BANNERS, {banners})
    }
  },
  async getRecommendList ({commit}) {
    const result = await resRecommendList()
    if (result.code === 200) {
      const recommendList = result.result
      commit(RECEIVE_RECOMMEND_LIST, {recommendList})
    }
  },
  async getAnchorRadios ({commit}) {
    const result = await resAnchorRadios()
    if (result.code === 200) {
      const anchorRadios = result.programs
      commit(RECEIVE_ANCHOR_RADIOS, {anchorRadios})
    }
  },
  async getAllRankList ({commit}) {
    const result = await resAllRankList()
    if (result.code === 200) {
      const allRankList = {list: result.list, artistToplist: result.artistToplist, rewardToplist: result.rewardToplist}
      commit(RECEIVE_ALL_RANK_LIST, {allRankList})
    }
  },
  async getSupermeMusic ({commit}) {
    const result = await resSupremeMusic()
    if (result.code === 200) {
      const supermeMusic = result.playlists
      commit(RECEIVE_SUPREME_MUSIC, {supermeMusic})
    }
  },
  async getMusicList ({commit}, {limit, offset}) {
    const result = await resMusicList(limit, offset)
    if (result.code === 200) {
      const musicList = result.playlists
      commit(RECEIVE_MUSIC_LIST, {musicList})
    }
  },
  async getMusicListInfo ({commit}, id) {
    const result = await resMusicListInfo(id)
    if (result.code === 200) {
      const musicListInfo = result.playlist
      commit(RECEIVE_MUSIC_LIST_INFO, {musicListInfo})
    }
  },
  getUserInfo ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  getUserDetail ({commit}, userDetail) {
    commit(RECEIVE_USER_DETAIL, {userDetail})
  },
  async getHotSearch ({commit}) {
    const result = await resHotSearch()
    if (result.code === 200) {
      const hotSearch = result.result.hots
      commit(RECEIVE_HOT_SEARCH, {hotSearch})
    }
  },
  async getHotSinger ({commit}) {
    const result = await resHotSinger()
    if (result.code === 200) {
      const hotSinger = result.artists
      commit(RECEIVE_HOT_SINGER, {hotSinger})
    }
  },
  async getSingerList ({commit}) {
    const result = await resSingerList()
    if (result.code === 200) {
      const singerList = result.artists
      commit(RECEIVE_SINGER_LIST, {singerList})
    }
  },
  getUserSongList ({commit}, userSongList) {
    commit(RECEIVE_USER_SONG_LIST, {userSongList})
  },
  async getSearchList ({commit}, {keyword, limit, offset, type}) {
    const result = await resSearchList(keyword, limit, offset, type)
    return result
  },
  getSearchSongs ({commit}, songs) {
    commit(RECEIVE_SEARCH_SONGS, songs)
  },
  getCleanSongs ({commit}, cleanSongs) {
    commit(RECEIVE_CLEAN_SONG, cleanSongs)
  },
  async getRecommendDj ({commit}) {
    const result = await resRecommendDj()
    if (result.code === 200) {
      const recommendDj = result.djRadios
      commit(RECEIVE_RECOMMEND_DJ, recommendDj)
    }
  },
  async getPayRadio ({commit}) {
    const result = await resPayGift()
    if (result.code === 200) {
      const payRadio = result.data.list
      commit(RECEIVE_PAY_GIFT, payRadio)
    }
  },
  async getRadioRecommend ({commit}) {
    const result = await resRadioCategory() // 获得分类ID
    if (result.code === 200) {
      const categories = result.categories
      const list = [] // 存放分类信息
      for (let i = 0; i < categories.length; i++) {
        const categeryDetail = await resRadioCategoryRecommend(categories[i].id)
        if (categeryDetail.code === 200) {
          let temp = categeryDetail.djRadios
          list.push(temp)
        }
      }
      const obj = {lradioCategory: categories, radioCategoryDetail: list}
      commit(RECEIVE_RADIO_CATEGORY, obj)
    }
  }
}
