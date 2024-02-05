import styled from '@emotion/native';
import { TextProps as RNTextProps } from 'react-native';

export type FontWeight = 'normal' | 'medium' | 'bold' | 'black';

export interface TextProps extends RNTextProps {
  fontWeight?: FontWeight;
  italic?: boolean;
  color?: string;
  marginLeft?: string;
}

export const getFontFamily = (
  fontWeight: FontWeight = 'normal',
  italic = false,
): string => {
  switch (fontWeight) {
    // case 'normal':
    //   return italic ? 'Sarabun-BookItalic' : 'Sarabun-Medium';
    // case 'medium':
    //   return italic ? 'Sarabun-MediumItalic' : 'Sarabun-Medium';
    // case 'bold':
    //   return italic ? 'Sarabun-SemiBoldItalic' : 'Sarabun-SemiBold';
    // case 'black':
    //   return italic ? 'Sarabun-BlackItalic' : 'Sarabun-Black';
    default:
      return italic ? '' : '';
  }
};

export const Text = styled.Text<TextProps>`
  font-family: ${props => getFontFamily(props.fontWeight, props.italic)};
  color: ${({ color, theme }) => color ?? theme.colors?.dark[1]};
  margin-left: ${props => props.marginLeft};
`;

export const H1 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.h1.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.h1.lineHeight.toString()}px;
`;

export const H2 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.h2.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.h2.lineHeight.toString()}px;
`;

export const H3 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.h3.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.h3.lineHeight.toString()}px;
`;

export const H4 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.h4.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.h4.lineHeight.toString()}px;
`;

export const H5 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.h5.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.h5.lineHeight.toString()}px;
`;

export const H6 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.h6.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.h6.lineHeight.toString()}px;
`;

export const H7 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.h7.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.h7.lineHeight.toString()}px;
`;

export const Heading = styled(Text)`
  font-size: ${({ theme }) => theme.typography.heading.fontSize.toString()}px;
  line-height: ${({ theme }) =>
    theme.typography.heading.lineHeight.toString()}px;
`;

export const Heading2 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.heading2.fontSize.toString()}px;
  line-height: ${({ theme }) =>
    theme.typography.heading2.lineHeight.toString()}px;
`;

export const SmallHeading = styled(Text)`
  font-size: ${({ theme }) =>
    theme.typography.smallHeading.fontSize.toString()}px;
  line-height: ${({ theme }) =>
    theme.typography.smallHeading.lineHeight.toString()}px;
`;

export const Body0 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.body0.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.body0.lineHeight.toString()}px;
`;

export const Body1 = styled(Text)`
  font-size: ${({ theme }) => theme.typography.body1.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.body1.lineHeight.toString()}px;
`;
export const Body2 = styled(Text)`
  font-size: ${({ theme }) => theme.typography?.body2.fontSize.toString()}px;
  line-height: ${({ theme }) =>
    theme.typography?.body2.lineHeight.toString()}px;
`;

export const Text1 = styled(Text)`
  font-size: ${({ theme }) => theme.typography?.text1.fontSize.toString()}px;
  line-height: ${({ theme }) =>
    theme.typography?.text1.lineHeight.toString()}px;
`;
export const Text2 = styled(Text)`
  font-size: ${({ theme }) => theme.typography?.text2.fontSize.toString()}px;
  line-height: ${({ theme }) =>
    theme.typography?.text2.lineHeight.toString()}px;
`;

export const Label = styled(Text)`
  font-size: ${({ theme }) => theme.typography.label.fontSize.toString()}px;
  line-height: ${({ theme }) => theme.typography.label.lineHeight.toString()}px;
`;

export const SmallLabel = styled(Text)`
  font-size: ${({ theme }) =>
    theme.typography?.smallLabel.fontSize.toString()}px;
  line-height: ${({ theme }) =>
    theme.typography?.smallLabel.lineHeight.toString()}px;
`;

export const TinyLabel = styled(Text)`
  font-size: ${({ theme }) =>
    theme.typography?.tinyLabel.fontSize.toString()}px;
  line-height: ${({ theme }) =>
    theme.typography?.tinyLabel.lineHeight.toString()}px;
`;

export const LargeLabel = styled(Text)`
  font-size: ${({ theme }) =>
    theme.typography?.largeLabel.fontSize.toString()}px;
  line-height: ${({ theme }) =>
    theme.typography?.largeLabel.lineHeight.toString()}px;
`;
