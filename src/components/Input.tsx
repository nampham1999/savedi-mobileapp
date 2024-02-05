// Import necessary libraries and types
import { colors } from '../theme/colors';
import React from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Body1 } from './Typography';

// Define the FormInput interface
interface FormInput<V> {
  value?: V;
  onChange?: (value: any) => void; // eslint-disable-line  @typescript-eslint/no-explicit-any
  onFocus?: () => void;
  onBlur?: () => void;
}

// Define the InputProps type
type InputProps<P, FV extends FieldValues> = P & {
  as: React.ComponentType<P>;
  control: Control<FV>;
  name: Path<FV>;
  shouldUnregister?: boolean;
  rules?: {
    required?: string | boolean;
  };
};

// Define the Input component
export default function Input<V, FV extends FieldValues, P extends FormInput<V>>({
  as: Component,
  control,
  shouldUnregister = false,
  onChange: onChangeProp,
  onFocus: onFocusExternal,
  onBlur: onBlurExternal,
  rules,
  ...props
}: P extends FormInput<V> ? InputProps<P, FV> : InputProps<P, FV>) {
  const {
    field: { value, onBlur, onChange, ref },
    fieldState: { error, isTouched, invalid },
  } = useController({
    name: props.name,
    control,
    shouldUnregister,
    rules,
  });

  const isError = error || isTouched && invalid;

  return (
    <>
      <Component
        ref={ref}
        value={value}
        onBlur={() => {
          onBlur();
          onBlurExternal?.();
        }}
        onFocus={() => {
          onFocusExternal?.();
        }}
        onChange={(e: React.ChangeEvent<any>) => {
          onChangeProp?.(e);
          onChange(e);
        }}
        {...props}
      />
      {isError && (
        <Body1 fontWeight='bold' color={colors.error} style={{ fontSize: 16 }}>{error?.message}</Body1>
      )}
    </>
  );
}