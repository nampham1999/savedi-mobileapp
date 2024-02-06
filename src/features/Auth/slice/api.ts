import { baseQueryApi as api } from '../../../store/baseQueryApi';
import {
  AuthResponse,
  DataLogin,
  LoginPayload,
  RegisterPayload,
  UserInfo,
} from '../types';

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<AuthResponse<DataLogin>, LoginPayload>({
      query: payload => {
        return {
          url: '/authentication/login',
          method: 'POST',
          body: payload,
        };
      },
    }),
    getProfile: build.query<AuthResponse<UserInfo>, undefined>({
      query: () => {
        return {
          url: '/profile',
        };
      },
    }),
    register: build.mutation<any, RegisterPayload>({
      query: payload => {
        return {
          url: '/authentication/register',
          method: 'POST',
          body: payload,
        };
      },
    }),
    validateDuplicatedData: build.mutation<
      { statusCode: 200; data: string[] },
      {
        validate: { key: string; value: string }[];
      }
    >({
      query: payload => {
        return {
          url: '/authentication/get',
          method: 'POST',
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useRegisterMutation,
  useValidateDuplicatedDataMutation,
} = authApi;
