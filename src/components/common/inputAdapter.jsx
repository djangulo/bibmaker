/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Input, Label, Form } from 'semantic-ui-react';

export default function InputAdapter({
  input,
  meta,
  label,
  labelProps = { size: 'large' },
  errorLabelProps,
  width,
  size,
  inline = false,
  ...rest
}) {
  return (
    <Form.Field width={width} size={size} inline={inline}>
      {label ? (
        <label {...labelProps} htmlFor={input.id}>
          {label}
        </label>
      ) : null}
      <Input
        {...input}
        {...rest}
        fluid={false}
        onChange={(event, value) => input.onChange(value.value)}
        error={meta.touched && meta.error ? true : false}
      />

      {meta.touched && meta.error ? (
        <Label
          basic
          pointing={'above'}
          color="red"
          size="tiny"
          {...errorLabelProps}
        >
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}
