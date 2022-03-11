
import * as React from 'react';
import styles from './HdgLv4.module.scss';

export type Props = {
    children: React.ReactNode,
};

export function HdgLv4(props: Props) {
    const {children} = props;

    return (
        <div className={styles.root}>
            <h4 className={styles.hdg}>
                <span className={styles.title}>{children}</span>
            </h4>
        </div>
    );
}
