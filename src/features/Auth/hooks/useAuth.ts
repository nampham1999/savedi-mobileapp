import { AppRootParams } from '@/navigation/types';
import { useAppSelector } from '@/store/type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import Config from 'react-native-config';
import { useGetProfileQuery, useLoginMutation } from '../slice/api';
import { getAccessToken } from '../slice/selectors';

const useAuth = () => {
  const { navigate } = useNavigation<NavigationProp<AppRootParams, 'Login'>>();

  const accessToken = useAppSelector(getAccessToken);

  const [loginUser, { isLoading }] = useLoginMutation();

  const { data: userInfo } = useGetProfileQuery(undefined, {
    skip: !accessToken,
    refetchOnMountOrArgChange: true,
  });

  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      await loginUser({ ...data, remember_me: true }).unwrap();

      navigate('Tab');
    } catch (error: any) {
      console.log(error);
      Alert.alert(`Invalid credentials`);
    }
  };

  return {
    isLoading,
    handleLogin,
    userInfo: userInfo?.data,
  };
};

export default useAuth;
