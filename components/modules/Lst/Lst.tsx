
import * as React from 'react';
import styles from './Lst.module.scss';

export type Props = {
    children: React.ReactNode,
};

export function Lst(props: Props) {
    const {children} = props;

    return (
        <div className={styles.root}>
            <ul className={styles.lst}>
                {children}
            </ul>
        </div>
    );
}

export function LstItm(props: Props) {
    const {children} = props;

    return (
        <li className={styles.itm}>
            {children}
        </li>
    );
}
