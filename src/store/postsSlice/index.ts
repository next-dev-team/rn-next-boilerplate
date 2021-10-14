import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { AppThunkOption, RootState } from 'store/store';
import { request } from 'utils/request';

export interface PostSlice {
  postStatus: 'idle' | 'loading' | 'failed' | 'success';
  postList: Partial<PostsApi.PostsType>;
}

const initialState: PostSlice = {
  postStatus: 'idle',
  postList: {
    data: [],
  },
};

const getPostsList = createAsyncThunk<PostsApi.PostsType, undefined, AppThunkOption>('post/list', async () => {
  const response: AxiosResponse<PostsApi.PostsType> = await request.get(`/posts`);
  return response.data;
});

export const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    clearList: state => {
      state.postList = initialState.postList;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPostsList.pending, state => {
        state.postStatus = 'loading';
      })
      .addCase(getPostsList.fulfilled, (state, { payload }) => {
        state.postStatus = 'success';
        state.postList = payload;
      })
      .addCase(getPostsList.rejected, state => {
        state.postStatus = 'failed';
      });
  },
});

export { getPostsList };
export const {} = postSlice.actions;

export const selPostList = (state: RootState) => state.postsSlice.postList;
export const selPostStatus = (state: RootState) => state.postsSlice.postStatus;

export default postSlice.reducer;
