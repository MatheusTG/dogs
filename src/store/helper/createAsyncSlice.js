import { createSlice } from '@reduxjs/toolkit';

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Object} config.fetchConfig
 */
export function createAsyncSlice(config) {
  const slice = createSlice({
    name: config.name,
    initialState: {
      data: null,
      loading: false,
      error: null,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      },
      fetchError(state, action) {
        state.data = null;
        state.loading = false;
        state.error = action.payload;
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

  function asyncAction(payload) {
    return async (dispatch) => {
      try {
        dispatch(fetchStarted());
        const { url, options } = config.fetchConfig(payload);
        const response = await fetch(url, options);
        const data = await response.json();
        return dispatch(fetchSuccess(data));
      } catch (error) {
        return dispatch(fetchError(error.message));
      }
    };
  }

  return { ...slice, asyncAction };
}
