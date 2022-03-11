import styles from 'components/structures/main/Main.module.scss';

export function Main({children}: {
    children: React.ReactNode,
}) {
    return (
        <main className={styles.wrap}>
            {children}
        </main>
    )
}
