
import * as React from 'react';
import styles from './HdgLv2.module.scss';

export type Props = {
    children: React.ReactNode,
};

export function HdgLv2(props: Props) {
    const {children} = props;

    return (
        <div className={styles.root}>
            <h2 className={styles.hdg}>
                <span className={styles.title}>{children}</span>
            </h2>
        </div>
    );
}
