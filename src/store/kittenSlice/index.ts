import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { apiUrl } from 'constants/http';
import { AppThunkOption, RootState } from 'store/store';
import { fakerData } from 'utils/mockData';
import { request } from 'utils/request';

type KittenParam = {
  width: number;
  height: number;
  filterCount: number;
};
type ResKitten = { filterCount: number; imgFile: string };
export type KittenItem = { img: string; name: string; description: string };

export interface KittenSlice {
  kittenStatus: 'idle' | 'loading' | 'failed';
  kittenList: KittenItem[];
  filterData: { value: number }[];
  filterValue: number;
}

const filterData = [{ value: 30 }, { value: 50 }, { value: 100 }];

const initialState: KittenSlice = {
  kittenStatus: 'idle',
  kittenList: [],
  filterData,
  filterValue: filterData[0].value,
};

const getKittenImg = createAsyncThunk<ResKitten & KittenParam, KittenParam, AppThunkOption>(
  'kitten/list',
  async payload => {
    const { filterCount, height, width } = payload;
    const response: AxiosResponse<ResKitten['imgFile']> = await request.get(`/${width}/${height}`);

    return {
      imgFile: response.data, // if want to use file
      filterCount: filterCount,
      height: payload.height,
      width: payload.width,
    };
  }
);

export const kittenSlice = createSlice({
  name: 'kittenSlice',
  initialState,
  reducers: {
    setFilterValue: (state, action: PayloadAction<KittenSlice['filterValue']>) => {
      state.filterValue = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getKittenImg.pending, state => {
        state.kittenStatus = 'loading';
      })
      .addCase(getKittenImg.fulfilled, (state, action) => {
        const getRandomData = () => {
          const res = [];
          if (action?.payload.filterCount > 0) {
            for (let i = 0; i < action?.payload.filterCount; i += 1) {
              res.push({
                img: `${apiUrl.baseUrl}/${action.payload.width + i}/${action.payload.height + i}`,
                name: fakerData().random.words(1) + ' cat ' + i,
                description: fakerData().lorem.paragraphs(4),
              });
            }
          }
          return res;
        };

        state.kittenStatus = 'idle';
        state.kittenList = getRandomData();
      })
      .addCase(getKittenImg.rejected, state => {
        state.kittenStatus = 'failed';
      });
  },
});

export { getKittenImg };
export const { setFilterValue } = kittenSlice.actions;

export const selKittenList = (state: RootState) => state.kittenSlice.kittenList;
export const selKittenStatus = (state: RootState) => state.kittenSlice.kittenStatus;
export const selFilterValue = (state: RootState) => state.kittenSlice.filterValue;
export const selFilterData = (state: RootState) => state.kittenSlice.filterData;

export default kittenSlice.reducer;
