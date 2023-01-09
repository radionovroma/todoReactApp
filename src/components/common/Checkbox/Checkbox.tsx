import React, { FC } from 'react';
import css from './styles.module.css';

interface CheckboxProps {
  checked: boolean;
  id: number;
  value: string;
}

export const Checkbox: FC<CheckboxProps> = ({checked, id, value}) => {
  return (
    <React.Fragment>
      <input className={css.checkbox} type='checkbox' checked={checked} id={id.toString()} value={value}/>
      <label className={css.label} htmlFor={id.toString()}>
        {value}
      </label>
    </React.Fragment>
  );
}

