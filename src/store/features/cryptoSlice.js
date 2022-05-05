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

const initialState = {
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
      state.isLoading = false;
      state.isError = false;
      state.cryptoList = action.payload
    },
    [fetchCrypto.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    }
  }
})

export default cryptoSlice.reducer