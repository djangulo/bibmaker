/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Label, Dropdown, Form } from 'semantic-ui-react';

export default function DropdownAdapter({
  input,
  meta,
  id,
  value,
  label,
  compact = false,
  labelProps,
  errorLabelProps,
  ...rest
}) {
  return (
    <Form.Field>
      <label {...labelProps} htmlFor={id}>
        {label}
      </label>
      <Dropdown
        selection
        error={meta.error ? true : false}
        // text={input.value ? val.value : ''}
        compact={compact}
        {...input}
        {...rest}
        onChange={(event, value) => input.onChange(value.value)}
      />
      {meta.touched && meta.error ? (
        <Label basic pointing="above" color="red" {...errorLabelProps}>
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}
