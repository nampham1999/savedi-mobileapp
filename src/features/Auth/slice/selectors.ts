import { RootState } from '@/store/type';
import { createSelector } from '@reduxjs/toolkit';

export const getAccessToken = createSelector(
  (state: RootState) => state.auth.accessToken,
  accessToken => accessToken,
);
