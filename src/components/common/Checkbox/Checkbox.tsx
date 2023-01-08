import React, { FC } from 'react';

interface CheckboxProps {
  checked: boolean;
  id: number;
  value: string;
}

export const Checkbox: FC<CheckboxProps> = ({checked, id, value}) =>
  <React.Fragment>
    <input type='checkbox' checked={checked} id={id.toString()} value={value}/>
    <label htmlFor={id.toString()}>
      {value}
    </label>
  </React.Fragment>
