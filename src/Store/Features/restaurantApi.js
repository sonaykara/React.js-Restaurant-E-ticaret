import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

const initialState = {
  data: [],
};

export const fetchData = createAsyncThunk("fetchData", async (url) => {
  const response = await api.get(url);
  return response.data;
});

const httpsSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default httpsSlice.reducer;
