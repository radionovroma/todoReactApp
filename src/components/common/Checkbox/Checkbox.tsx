import { FC, Fragment } from 'react';
import css from './styles.module.css';

interface CheckboxProps {
  checked: boolean;
  id: number;
  value: string;
  onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({checked, id, value, onChange}) => {
  return (
    <Fragment>
      <input className={css.checkbox} type='checkbox' checked={checked} id={id.toString()} value={value} onChange={onChange}/>
      <label className={css.label} htmlFor={id.toString()}>
        {value}
      </label>
    </Fragment>
  );
}

