import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled.View(({ theme: { colors } }) => ({
  backgroundColor: colors.white[1],
  flex: 1,
}));

export const SafeContainer = styled(SafeAreaView)(({ theme: { colors } }) => ({
  backgroundColor: colors.white[1],
  flex: 1,
}));

export default Container;
