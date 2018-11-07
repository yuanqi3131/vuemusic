import {
  RECEIVE_BANNERS,
  RECEIVE_RECOMMEND_LIST,
  RECEIVE_ANCHOR_RADIOS,
  RECEIVE_ALL_RANK_LIST
} from './mtations-type'
import {
  resBanners,
  resRecommendList,
  resAnchorRadios,
  resAllRankList
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
  }
}
