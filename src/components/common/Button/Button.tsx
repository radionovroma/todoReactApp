import { FC, PropsWithChildren } from 'react';
import css from './styles.module.css';

interface ButtonProps {
    onClick: () => void;
    type?: 'delete' | 'submit'
}
export const Button: FC<PropsWithChildren<ButtonProps>> = ({children, onClick, type = 'submit' }) => {
    return <button className={ css[type] } onClick={ onClick }>{ children }</button>;
}
