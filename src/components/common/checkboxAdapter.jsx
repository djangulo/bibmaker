import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

export default function CheckboxGroupAdapter({
  input,
  label,
  name,
  valueFromState,
  options,
  ...rest
}) {
  return options && options.length ? (
    <Form.Group
      widths="equal"
      inline
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      <Form.Field>
        <label>{label}</label>
      </Form.Field>
      {options.map((option, index) => {
        const { text, value, key } = option;
        return (
          <Form.Field key={key}>
            <Checkbox
              radio
              label={text}
              value={value}
              name={name}
              checked={valueFromState === value}
              onClick={(event, isInputChecked) => {
                console.log(isInputChecked);
                input.onChange(isInputChecked.checked);
              }}
              {...input}
              {...rest}
            />
          </Form.Field>
        );
      })}
    </Form.Group>
  ) : null;
}
