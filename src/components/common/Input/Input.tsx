import type { FC } from 'react';
import css from './styles.module.css';

interface InputProps {
    placeholder: string;
}

export const Input: FC<InputProps> = (obj) => <input className={css.input} placeholder={ obj.placeholder } />
