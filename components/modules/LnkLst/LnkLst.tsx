
import * as React from 'react';
import styles from './LnkLst.module.scss';
import {Ico} from '../Ico/Ico';

export type Props = {
    children: React.ReactNode,
};

export function LnkLst(props: Props) {
    const {children} = props;

    return (
        <div className={styles.root}>
            <ul className={styles.lst}>
                {children}
            </ul>
        </div>
    );
}

export function LnkLstItm(props: Props) {
    const {children} = props;

    return (
        <li className={styles.itm}>
            {children}
        </li>
    );
}
