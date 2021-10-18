import { AxiosResponse } from 'axios';
import { action, observable } from 'mobx';
import { request } from 'utils/request';

export interface PostSlice {
  postStatus: 'idle' | 'loading' | 'failed' | 'success';
  postDetailStatus: 'idle' | 'loading' | 'failed' | 'success';
  postList: Partial<PostsApi.PostsType>;
  postDetail: Partial<PostsApi.Datum>;
  count: number;
  refresh: boolean;
}

const initialState: PostSlice = {
  postStatus: 'idle',
  postDetailStatus: 'idle',
  postList: {
    data: [],
  },
  postDetail: {},
  count: 0,
  refresh: false,
};

const postStore = observable({
  ...initialState,
  decCounter: action(() => {
    postStore.count -= 1;
  }),
  refreshPost: action((refresh: boolean) => {
    postStore.refresh = refresh;
  }),
  incCounter: action(() => {
    postStore.count += 1;
  }),
  getPost: action(async () => {
    postStore.postStatus = 'loading';
    const response: AxiosResponse<PostsApi.PostsType> = await request.get(`/posts`);
    postStore.postList = response.data;
    postStore.postStatus = 'idle';
    return postStore.postList;
  }),
  getPostDetail: action(async (id: any) => {
    postStore.postDetailStatus = 'loading';
    const response: AxiosResponse<{ data: PostsApi.Datum }> = await request.get(`/posts/${id}`);
    postStore.postDetail = response?.data?.data;
    postStore.postDetailStatus = 'idle';
  }),
});
export default postStore;
