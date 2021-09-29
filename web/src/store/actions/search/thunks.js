// Axios
import axios from 'axios';

// Redux
import { batch } from 'react-redux';

// Creators
import * as creators from './creators';
import { showAlert } from '../';

export const getWebResults = (query, isPaged = false) => {
  return (dispatch, getState) => {
    dispatch(creators.getResultsStart({ query, isPaged, source: 'web' }));

    let searchUrl = '/search/web?query=' + query;
    if (isPaged) {
      const { page, limit } = getState().search.data.pagination.next;
      searchUrl = `${searchUrl}&page=${page}&limit=${limit}`;
    }

    axios
      .get(searchUrl)
      .then((response) => {
        dispatch(creators.getResultsSuccess(response.data));
      })
      .catch((error) => {
        batch(() => {
          dispatch(creators.getResultsFailure(error));
          dispatch(showAlert());
        });
      });
  };
};
