import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import Config from 'react-native-config';
import { RootState } from './type';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: Config.BASE_URL || 'https://dokya-api.multiverseexpert.io/api/v2',
  prepareHeaders: (headers, { getState, endpoint }) => {
    //todo: get token from auth slice
    const token = (getState() as RootState).auth.accessToken;
    if (!!token && endpoint !== 'refresh') {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  const { getState } = api;

  let result = await baseQuery(args, api, extraOptions);

  return result;
};

export const baseQueryApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['cart-products'],
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
});
