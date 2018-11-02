import {
  RECEIVE_BANNERS,
  RECEIVE_RECOMMEND_LIST
} from './mtations-type'

export default {
  [RECEIVE_BANNERS] (state, {banners}) {
    state.banners = banners
  },
  [RECEIVE_RECOMMEND_LIST] (state, {recommendList}) {
    state.recommendList = recommendList
  }
}
