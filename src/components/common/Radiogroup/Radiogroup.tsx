import { FC, Fragment } from 'react';
import css from './styles.module.css';

interface RadiogroupProps {
  items: {id: string; label: string; value: string }[];
  name: string;
  value: string;
  onChange: (value: string) => void;
}
export const Radiogroup: FC<RadiogroupProps> = ({ name, items, value, onChange}) => {
  return (
    <div className={css.radiogroup}>
      {items.map((item) => (
        <Fragment>
          <input
            className={css.radiobutton}
            type='radio'
            id={item.id}
            name={name}
            value={item.value}
            checked={ item.value === value}
            onChange={ () => onChange(item.value)}
          />
          <label className={css.label} htmlFor={item.id}>{item.label}</label>
        </Fragment>
      ))}
    </div>
  );
}
