import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const baseUrl = 'https://api.coingecko.com/api/v3';

export const fetchCrypto = createAsyncThunk('crypto/fetchCrypto', async (count, {rejectWithValue }) => {
  try {
    const res = await axios.get(`${baseUrl}/coins?per_page=${count}`);
    return res.data
  } catch (err) {
    return rejectWithValue([], err);
  }  
})

export const fetchCryptoAll = createAsyncThunk('crypto/fetchCryptoAll', async (_, {rejectWithValue }) => {
  try {
    const res = await axios.get(`${baseUrl}/coins`);
    return res.data
  } catch (err) {
    return rejectWithValue([], err);
  }  
})

const initialState = {
  cryptoListAll: [],
  cryptoList: [],
  isLoading: null,
  isError: null
}

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCrypto.pending]: (state) => {
      state.isLoading = true;
      state.isError = false
    },
    [fetchCrypto.fulfilled]: (state, action) => {
      state.cryptoList = action.payload
      state.isLoading = false;
      state.isError = false;
    },
    [fetchCrypto.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },

    [fetchCryptoAll.pending]: (state) => {
      state.isLoading = true;
      state.isError = false
    },
    [fetchCryptoAll.fulfilled]: (state, action) => {
      state.cryptoListAll = action.payload
      state.isLoading = false;
      state.isError = false;
    },
    [fetchCryptoAll.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    }
  }
})

export const { onSearchCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;