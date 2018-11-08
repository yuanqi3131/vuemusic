import {
  RECEIVE_BANNERS,
  RECEIVE_RECOMMEND_LIST,
  RECEIVE_ANCHOR_RADIOS,
  RECEIVE_ALL_RANK_LIST,
  RECEIVE_SUPREME_MUSIC,
  RECEIVE_MUSIC_LIST
} from './mtations-type'
import {
  resBanners,
  resRecommendList,
  resAnchorRadios,
  resAllRankList,
  resSupremeMusic,
  resMusicList
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
      const anchorRadios = result.result
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
  async getMusicList ({commit}) {
    const result = await resMusicList()
    if (result.code === 200) {
      const musicList = result.playlists
      commit(RECEIVE_MUSIC_LIST, {musicList})
    }
  }
}
