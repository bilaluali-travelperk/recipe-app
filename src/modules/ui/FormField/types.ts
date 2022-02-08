import * as React from 'react';

export type FormFieldLabelProps = Omit<
  React.HTMLProps<HTMLLabelElement>,
  'ref' | 'as'
>;

export type FormFieldInputProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  'ref' | 'as'
>;

export type FormFieldHelperProps = Omit<
  React.HTMLProps<HTMLElement>,
  'ref' | 'as'
>;

export interface FormFieldProps {
  LabelProps: FormFieldLabelProps;
  InputProps: FormFieldInputProps;
  HelperProps?: FormFieldHelperProps;
}
