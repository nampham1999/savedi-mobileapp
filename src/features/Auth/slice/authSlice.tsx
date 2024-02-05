import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse, DataLogin, UserInfo } from '../types';
import { authApi } from './api';

interface AuthStates {
  accessToken: string | null;
  userInfo: UserInfo | null;
}

const initialState: AuthStates = {
  userInfo: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    setAccessToken: (
      state,
      actions: PayloadAction<{
        accessToken: string;
      }>,
    ) => {
      state.accessToken = actions.payload.accessToken;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<AuthResponse<DataLogin>>) => {
        state.accessToken = action.payload.data.access_token;
      },
    ),
      builder.addMatcher(
        authApi.endpoints.getProfile.matchFulfilled,
        (state, action: PayloadAction<AuthResponse<UserInfo>>) => {
          state.userInfo = action.payload.data;
        },
      );
  },
});

export const { logout, setAccessToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
