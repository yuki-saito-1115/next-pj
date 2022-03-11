
import * as React from 'react';
import styles from './HdgLv1.module.scss';

export type Props = {
    children: React.ReactNode,
    subTitle?: string,
};

export function HdgLv1(props: Props) {
    const {children, subTitle} = props;

    return (
        <div className={styles.root}>
            <h1 className={styles.hdg}>
                <span className={styles.title}>{children}</span>
            </h1>

            {subTitle ? (<div className={styles.subTitle}>{subTitle}</div>) : ''}
        </div>
    );
}
