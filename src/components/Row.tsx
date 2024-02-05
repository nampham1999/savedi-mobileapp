import styled from '@emotion/native';
import { FlexStyle } from 'react-native';

const Row = styled.View<{
  gap?: number;
  justifyContent?: FlexStyle['justifyContent'];
  alignItem?: FlexStyle['alignItems'];
}>(({ gap, justifyContent, alignItem }) => ({
  flexDirection: 'row',
  alignItems: alignItem || 'center',
  gap,
  justifyContent,
}));

export const SeparatedRow = styled(Row)({
  justifyContent: 'space-between',
});

export default Row;
