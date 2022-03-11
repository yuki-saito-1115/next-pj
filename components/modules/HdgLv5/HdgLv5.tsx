
import * as React from 'react';
import styles from './HdgLv5.module.scss';

export type Props = {
    children: React.ReactNode,
};

export function HdgLv5(props: Props) {
    const {children} = props;

    return (
        <div className={styles.root}>
            <h5 className={styles.hdg}>
                <span className={styles.title}>{children}</span>
            </h5>
        </div>
    );
}
