
import * as React from 'react';
import styles from './Pgh.module.scss';

export type Props = {
    align?: string,
    className?: string,
    children: React.ReactNode,
};

export function Pgh(props: Props) {
    const {className, children} = props;

    return (
        <div className={`${styles.root} ${className ? `${className}` : ''}`}>
            {children}
        </div>
    );
}

export function PghItm(props: Props) {
    const {className, children} = props;

    return (
        <p className={`${styles.itm} ${className ? `${className}` : ''}`}>
            {children}
        </p>
    );
}
