import React, { FC } from 'react';

interface RadiogroupProps {
  items: {id: string; label: string; value: string }[];
  name: string;
  value: string;
}
export const Radiogroup: FC<RadiogroupProps> = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <React.Fragment>
          <input
            type='radio'
            id={item.id}
            name={props.name}
            value={item.value}
            checked={ item.value === props.value}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </React.Fragment>
      ))}
    </div>
  );
}
