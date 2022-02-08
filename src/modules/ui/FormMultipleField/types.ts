import * as React from 'react';

export type FormMultipleFieldLabelProps = Omit<
  React.HTMLProps<HTMLLabelElement>,
  'ref' | 'as'
>;

export type FormMultipleFieldTextAreaProps = Omit<
  React.HTMLProps<HTMLTextAreaElement>,
  'ref' | 'as'
>;

export type FormMultipleFieldHelperProps = Omit<
  React.HTMLProps<HTMLElement>,
  'ref' | 'as'
>;

export interface FormMultipleFieldProps {
  LabelProps: FormMultipleFieldLabelProps;
  TextAreaProps: FormMultipleFieldTextAreaProps;
  HelperProps?: FormMultipleFieldHelperProps;
}
