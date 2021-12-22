import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { AppThunkOption, RootState } from '_app/store/store';
import { request } from '_app/utils/request';

export interface PostSlice {
  postStatus: 'idle' | 'loading' | 'failed' | 'success';
  postDetailStatus: 'idle' | 'loading' | 'failed' | 'success';
  postList: Partial<PostsApi.PostsType>;
  postDetail: Partial<PostsApi.Datum>;
}

const initialState: PostSlice = {
  postStatus: 'idle',
  postDetailStatus: 'idle',
  postList: {
    data: [],
  },
  postDetail: {},
};

// ----------- getPostsList --------------
const getPostsList = createAsyncThunk<PostsApi.PostsType, undefined, AppThunkOption>('post/list', async () => {
  const response: AxiosResponse<PostsApi.PostsType> = await request.get(`/posts`);
  return response.data;
});

// ----------- getPostsDetail --------------
const getPostsDetail = createAsyncThunk<PostsApi.Datum, any, AppThunkOption>('post/detail', async id => {
  const response: AxiosResponse<PostsApi.Datum> = await request.get(`/posts/${id}`);
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
      })
      // --------- getPostsDetail ---------
      .addCase(getPostsDetail.pending, state => {
        state.postDetailStatus = 'loading';
      })
      .addCase(getPostsDetail.fulfilled, (state, { payload }) => {
        state.postDetailStatus = 'success';
        state.postDetail = payload;
      })
      .addCase(getPostsDetail.rejected, state => {
        state.postDetailStatus = 'failed';
      });
  },
});

export { getPostsList, getPostsDetail };
export const { clearList } = postSlice.actions;

export const selPostList = (state: RootState) => state.postsSlice.postList;
export const selPostStatus = (state: RootState) => state.postsSlice.postStatus;
export const selPostDetailStatus = (state: RootState) => state.postsSlice.postDetailStatus;
export const selPostDetail = (state: RootState) => state.postsSlice.postDetail;

export default postSlice.reducer;
