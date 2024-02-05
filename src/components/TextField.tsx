import { colors } from '../theme/colors';
import styled from '@emotion/native';
import { useController } from 'react-hook-form';
import { TextInput, TextInputProps, ViewProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Body1, Body2, Label } from './Typography';

// import { Icons } from '@/assets';
import { SVGProps, forwardRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Row from './Row';

const Container = styled.View(({ theme: { verticalScale } }) => ({
  width: '100%',
  marginTop: verticalScale(20),
}));

type InputSize = 'large' | 'normal';

export const InputWrapper = styled.View<{
  isError?: boolean;
  hasSuffix?: boolean;
  readonly?: boolean;
  characterCounter?: boolean;
}>(
  ({
    theme: { colors, borderRadius },
    isError,
    hasSuffix,
    readonly,
    characterCounter,
  }) => ({
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: !readonly ? colors.primary : colors.secondary[1],
    borderBottomWidth: 1,
    paddingVertical: 10.5,
    paddingBottom: characterCounter ? 30 : 10.5,
  }),
);

export const LabelText = styled(Body1)<{ size: InputSize }>(
  ({ theme: { colors, verticalScale }, size }) => ({
    color: colors.grey[1],
    fontSize: size === 'normal' ? 14 : 16,
  }),
);

const StyledInput = styled.TextInput<{ size: InputSize; readonly: boolean }>(
  ({ theme: { colors }, multiline, size, readonly }) => ({
    fontSize: size === 'large' ? 22 : 16,
    fontFamily: 'Sarabun',
    fontWeight: '700',
    color: readonly ? colors.secondary[1] : colors.dark[1],
    flex: 1,
    height: '100%',
    textAlignVertical: multiline ? 'top' : 'auto',
  }),
);

export const TextError = styled(Label)(
  ({ theme: { colors, verticalScale } }) => ({
    color: colors.error,
    textAlign: 'left',
    width: '100%',
    marginTop: verticalScale(5),
  }),
);

const Left = styled.View(({ theme: { horizontalScale } }) => ({
  marginRight: horizontalScale(8),
}));

const EyeBtn = styled.Pressable(({ theme: { horizontalScale } }) => ({
  paddingLeft: horizontalScale(4),
}));

export const Require = styled(Body2)(({ theme: { colors } }) => ({
  color: colors.error,
}));

export interface TextFieldProps
  extends Omit<TextInputProps, 'onChange' | 'value'> {
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;
  renderRight?: JSX.Element;
  label?: string;
  required?: boolean;
  suffix?: React.ReactNode;

  regex?: RegExp;
  iconSize?: number;
  containerStyle?: ViewStyle;
  size?: InputSize;
  readonly?: boolean;
  characterCounter?: boolean;
  labelRightIcon?: {
    icon?: React.FC<SvgProps>;
    props?: SvgProps;
    onPress?: () => void;
  };
  inputWrapperProps?: ViewProps;
  onChange?: (value: string) => void;
  error?: string;
  value?: string | number;
  onFocus?: () => void;
  onBlur?: () => void;
}

function TextFieldInner(
  {
    value,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    renderRight,
    label,
    required,
    suffix,
    regex,
    multiline,
    editable = true,
    iconSize,
    containerStyle,
    size = 'normal',
    readonly = false,
    characterCounter = false,
    maxLength,
    inputWrapperProps,
    labelRightIcon: LabelRightIcon,
    onChange,
    error,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    ...props
  }: TextFieldProps,
  ref: React.Ref<TextInput> | null,
) {
  //const { field, fieldState } = useController({ name, control });
  const [isPasswordHidden, setPasswordHidden] = useState(
    props?.secureTextEntry,
  );

  const togglePasswordVisibility = () => {
    setPasswordHidden(!isPasswordHidden);
  };

  //const isError = fieldState?.isTouched && fieldState?.invalid;

  // const handleInputChange = (value: string) => {
  //   field.onChange(value);
  // };

  const handleOnChangeText = (text: string) => {
    if (typeof onChange === 'function') {
      onChange(text);
    }
    if (typeof props.onChangeText === 'function') {
      props.onChangeText(text);
    }
  };

  return (
    <Container style={containerStyle}>
      <Row justifyContent="space-between">
        {label && <LabelText size={size}>{label}</LabelText>}
        {LabelRightIcon?.icon && (
          <TouchableOpacity onPress={LabelRightIcon?.onPress}>
            <LabelRightIcon.icon {...(LabelRightIcon.props || {})} />
          </TouchableOpacity>
        )}
      </Row>
      <InputWrapper
        {...inputWrapperProps}
        isError={false}
        hasSuffix={!!suffix}
        readonly={readonly}
        characterCounter={characterCounter}>
        {LeftIcon && (
          <Left>
            <LeftIcon width={16} height={16} />
          </Left>
        )}
        <StyledInput
          ref={ref}
          onChangeText={handleOnChangeText}
          value={value?.toString()}
          autoCapitalize="none"
          placeholderTextColor={colors.grey[5]}
          multiline={multiline}
          editable={editable}
          readonly={readonly}
          size={size}
          maxLength={maxLength}
          {...props}
          secureTextEntry={isPasswordHidden}
          onFocus={onFocusProp}
          onBlur={onBlurProp}
        />
        {/* {props?.secureTextEntry && (
          <EyeBtn onPress={togglePasswordVisibility}>
            {isPasswordHidden ? (
              <Icons.EyeCrossed width={16} height={16} color={colors.grey[1]} />
            ) : (
              <Icons.Eye width={16} height={16} color={colors.grey[1]} />
            )}
          </EyeBtn>
        )} */}

        {RightIcon && (
          <RightIcon width={iconSize || 16} height={iconSize || 16} />
        )}
        {renderRight}

        {characterCounter && (
          <Body2
            color={colors.grey[5]}
            style={{
              fontWeight: '300',
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}>
            {(value?.toString() || '').length}/{maxLength}
          </Body2>
        )}
      </InputWrapper>
      {error && <TextError>{error}</TextError>}
    </Container>
  );
}

const TextField = forwardRef(TextFieldInner);
export default TextField;
