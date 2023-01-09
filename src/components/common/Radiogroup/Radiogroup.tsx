import React, { FC } from 'react';
import css from './styles.module.css';

interface RadiogroupProps {
  items: {id: string; label: string; value: string }[];
  name: string;
  value: string;
}
export const Radiogroup: FC<RadiogroupProps> = (props) => {
  return (
    <div className={css.radiogroup}>
      {props.items.map((item) => (
        <React.Fragment>
          <input
            className={css.radiobutton}
            type='radio'
            id={item.id}
            name={props.name}
            value={item.value}
            checked={ item.value === props.value}
          />
          <label className={css.label} htmlFor={item.id}>{item.label}</label>
        </React.Fragment>
      ))}
    </div>
  );
}
