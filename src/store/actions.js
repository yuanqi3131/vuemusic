import {
  RECEIVE_BANNERS,
  RECEIVE_RECOMMEND_LIST
} from './mtations-type'
import {
  resBanners,
  resRecommendList
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
  }
}
