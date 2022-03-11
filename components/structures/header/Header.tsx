import styles from 'components/structures/header/Header.module.scss';

export function Header() {
    return (
        <header className={styles.wrap}>
            <div className={styles.outer}>
                <div className={styles.inner}>
                    header
                </div>
            </div>
        </header>
    )
}
