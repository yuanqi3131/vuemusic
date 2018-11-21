import {
  RECEIVE_BANNERS,
  RECEIVE_RECOMMEND_LIST,
  RECEIVE_ANCHOR_RADIOS,
  RECEIVE_ALL_RANK_LIST,
  RECEIVE_SUPREME_MUSIC,
  RECEIVE_MUSIC_LIST,
  RECEIVE_MUSIC_LIST_INFO,
  RECEIVE_USER_INFO,
  RECEIVE_USER_DETAIL
} from './mtations-type'

export default {
  [RECEIVE_BANNERS] (state, {banners}) {
    state.banners = banners
  },
  [RECEIVE_RECOMMEND_LIST] (state, {recommendList}) {
    state.recommendList = recommendList
  },
  [RECEIVE_ANCHOR_RADIOS] (state, {anchorRadios}) {
    state.anchorRadios = anchorRadios
  },
  [RECEIVE_ALL_RANK_LIST] (state, {allRankList}) {
    state.allRankList = allRankList
  },
  [RECEIVE_SUPREME_MUSIC] (state, {supermeMusic}) {
    state.supermeMusic = supermeMusic
  },
  [RECEIVE_MUSIC_LIST] (state, {musicList}) {
    state.MusicList = musicList
  },
  [RECEIVE_MUSIC_LIST_INFO] (state, {musicListInfo}) {
    state.musicListInfo = musicListInfo
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_USER_DETAIL] (state, {userDetail}) {
    state.userDetail = userDetail
  }
}
