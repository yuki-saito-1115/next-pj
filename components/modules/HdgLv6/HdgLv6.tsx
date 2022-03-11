
import * as React from 'react';
import styles from './HdgLv6.module.scss';

export type Props = {
    children: React.ReactNode,
};

export function HdgLv6(props: Props) {
    const {children} = props;

    return (
        <div className={styles.root}>
            <h6 className={styles.hdg}>
                <span className={styles.title}>{children}</span>
            </h6>
        </div>
    );
}
