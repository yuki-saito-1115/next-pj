import * as React from 'react';
import {Header} from 'components/structures/header/Header';
import {Main} from 'components/structures/main/Main';
import {Footer} from 'components/structures/footer/Footer';
import styles from 'components/structures/layout/Layout.module.scss';

export function Layout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <>
            <div className={styles.wrap}>
                <Header />
                <Main>{children}</Main>
                <Footer />
            </div>
        </>
    )
}
