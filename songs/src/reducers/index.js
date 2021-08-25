import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'song 2', duration: '4:04' },
    { title: 'another song', duration: '3:02' },
    { title: 'song 0', duration: '3:52' },
    { title: 'song 30', duration: '3:49' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
