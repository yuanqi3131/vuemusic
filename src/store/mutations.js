import {
  RECEIVE_BANNERS,
  RECEIVE_RECOMMEND_LIST,
  RECEIVE_ANCHOR_RADIOS,
  RECEIVE_ALL_RANK_LIST,
  RECEIVE_SUPREME_MUSIC,
  RECEIVE_MUSIC_LIST,
  RECEIVE_MUSIC_LIST_INFO,
  RECEIVE_USER_INFO,
  RECEIVE_USER_DETAIL,
  RECEIVE_HOT_SEARCH,
  RECEIVE_HOT_SINGER,
  RECEIVE_SINGER_LIST,
  RECEIVE_USER_SONG_LIST
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
  },
  [RECEIVE_HOT_SEARCH] (state, {hotSearch}) {
    state.hotSearch = hotSearch
  },
  [RECEIVE_HOT_SINGER] (state, {hotSinger}) {
    state.hotSinger = hotSinger
  },
  [RECEIVE_SINGER_LIST] (state, {singerList}) {
    state.singerCategory = singerList
  },
  [RECEIVE_USER_SONG_LIST] (state, {userSongList}) {
    state.userSongList = userSongList
  }
}
