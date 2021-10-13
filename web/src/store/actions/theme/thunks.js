// Creators
import * as creators from './creators';

// Redux
import { batch } from 'react-redux';

export const getThemeMode = () => {
  return (dispatch) => {
    dispatch(creators.getThemeModeStart());
    const mode = localStorage.getItem('themeMode');
    if (mode) {
      batch(() => {
        dispatch(creators.getThemeModeSuccess());
        dispatch(creators.setPaletteType(mode));
      });
    } else {
      dispatch(creators.getThemeModeFailure('Could not get theme mode'));
    }
  };
};

export const setThemeMode = (mode) => {
  return (dispatch) => {
    dispatch(creators.setThemeModeStart());
    try {
      localStorage.setItem('themeMode', mode);
      batch(() => {
        dispatch(creators.setThemeModeSuccess());
        dispatch(creators.setPaletteType(mode));
      });
    } catch (error) {
      dispatch(creators.setThemeModeFailure(error));
    }
  };
};
