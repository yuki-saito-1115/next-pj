
import * as React from 'react';
import styles from './HdgLv3.module.scss';

export type Props = {
    children: React.ReactNode,
};

export function HdgLv3(props: Props) {
    const {children} = props;

    return (
        <div className={styles.root}>
            <h3 className={styles.hdg}>
                <span className={styles.title}>{children}</span>
            </h3>
        </div>
    );
}
