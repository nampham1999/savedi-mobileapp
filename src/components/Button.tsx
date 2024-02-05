import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import {
  ActivityIndicator,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import Row from './Row';
import { Body2 } from './Typography';

export type ButtonProps = {
  text: string;
  outlined?: boolean;
  rounded?: boolean;
  size?: 'normal' | 'small';
  disabled?: boolean;
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;
  loading?: boolean;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  iconHeight?: number;
  iconWidth?: number;
} & TouchableOpacityProps;

export const ButtonWrapper = styled(Row)<{
  outlined?: boolean;
  disabled?: boolean;
  rounded?: boolean;
}>(
  ({
    theme: { colors, verticalScale, horizontalScale },
    outlined,
    disabled,
    rounded,
  }) => ({
    justifyContent: 'center',
    height: verticalScale(50),
    borderRadius: rounded ? 50 : 6,
    paddingHorizontal: horizontalScale(20),
    backgroundColor: !outlined ? colors.primary : colors.white[1],
    borderColor: colors.primary,
    borderWidth: !outlined ? 0 : 1,
    width: '100%',
    opacity: disabled ? 0.4 : 1,
    alignItems: 'center',
  }),
);

const Button = ({
  outlined,
  rounded,
  text,
  style,
  size = 'normal',
  disabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  loading,
  textStyle,
  buttonStyle,
  iconHeight,
  iconWidth,
  ...rest
}: ButtonProps) => {
  const { colors, verticalScale, horizontalScale } = useTheme();

  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled || loading}
      style={[{ width: '100%' }, style]}>
      <ButtonWrapper
        style={buttonStyle}
        disabled={disabled}
        outlined={outlined}
        rounded={rounded}>
        {!loading ? (
          <>
            {LeftIcon && (
              <LeftIcon
                width={verticalScale(iconWidth || 32)}
                height={verticalScale(iconHeight || 32)}
                style={{ marginRight: horizontalScale(8) }}
                color={colors.white[1]}
              />
            )}
            <Body2
              fontWeight="bold"
              color={!outlined ? colors.white[1] : colors.dark[1]}
              style={textStyle}>
              {text}
            </Body2>
            {RightIcon && (
              <RightIcon
                width={verticalScale(iconWidth)}
                height={verticalScale(iconHeight)}
                style={{ marginLeft: horizontalScale(8) }}
                color={colors.white[1]}
              />
            )}
          </>
        ) : (
          <ActivityIndicator color={colors.white[1]} size={'small'} />
        )}
      </ButtonWrapper>
    </TouchableOpacity>
  );
};

export default Button;
