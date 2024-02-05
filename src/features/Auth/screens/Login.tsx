// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import {Text, View} from 'react-native';

// const Login=()=>  {
//   return (
//     <View style={{backgroundColor:'red',flex:1}}>
//       <Text>Nam</Text>
//     </View>
//   );
// }

// export default Login;

// import { Icons, Images } from '@/assets';
import Button from '../../../components/Button';
import { SafeContainer } from '../../../components/Container';
import Input from '../../../components/Input';
import Row from '../../../components/Row';

import TextField from '../../../components/TextField';
import { Body2, Heading } from '../../../components/Typography';
// import { AppRootParams } from '@/navigation/types';

import { regexMap } from '@/consts/validateField';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
// import useAuth from '../hooks/useAuth';

const LogoLogin = styled(FastImage)(
  ({ theme: { horizontalScale, verticalScale } }) => ({
    width: horizontalScale(169),
    height: verticalScale(71),
    marginTop: verticalScale(23),
  }),
);

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });
  const {
    control,
    watch,
    setValue,
    setError,
    getValues,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      password: '',
      username: '',
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const { verticalScale, horizontalScale, colors } = useTheme();
  const { navigate } = useNavigation<NavigationProp<any>>();

  // const { handleLogin, isLoading } = useAuth();

  return (
    <SafeContainer style={{ paddingHorizontal: horizontalScale(20) }}>
      {/* <LogoLogin resizeMode="contain" source={Images.LogoLogin} /> */}
      <KeyboardAwareScrollView>
        <Heading fontWeight="medium" style={{ paddingTop: verticalScale(25) }}>
         SAVEDI
        </Heading>

        {/* <Body2 color={colors.grey[1]} style={{ paddingTop: verticalScale(8) }}>
          กรุณากรอกชื่อผู้ใช้และรหัสผ่าน
        </Body2> */}

        <Input
          name="username"
          control={control}
          as={TextField}
          // rightIcon={Icons.User}
          label={'user name'}
          placeholder={'user name'}
        />

        <Input
          name="password"
          control={control}
          as={TextField}
          label={'password'}
          placeholder={'password'}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => navigate('SubmitEmail')}>
          <Body2
            fontWeight="bold"
            color={colors.grey[1]}
            style={{ paddingVertical: verticalScale(25), textAlign: 'right' }}>
            quên mật khẩu?
          </Body2>
        </TouchableOpacity>

        <Button
          rounded
          onPress={()=>{}}
          text={'Đăng nhập'}
          disabled={!isValid || !isDirty}
          // loading={isLoading}
        />

        <Row
          style={{
            marginTop: verticalScale(21),
            alignSelf: 'center',
            gap: horizontalScale(8),
          }}>
          <Body2 color={colors.grey[1]}>
            Nếu bạn chưa có tài khoản
          </Body2>
          <TouchableOpacity onPress={() => navigate('RegisterInfo')}>
            <Body2 fontWeight="bold" color={colors.primary}>
              Đăng ký
            </Body2>
          </TouchableOpacity>
        </Row>
      </KeyboardAwareScrollView>
    </SafeContainer>
  );
};

export default Login;
