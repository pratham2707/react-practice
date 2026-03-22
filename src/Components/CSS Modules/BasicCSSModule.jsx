import styles from './index1.module.css'

function BasicCSSModule() {
    return (
        <>
            <button className={styles.myButton}>First Button</button>
            <button className={`${styles.myButton} ${styles.primary}`}>Primary Button</button>
            <button className={`${styles.myButton} ${styles.secondary}`}>Secondary Button</button>
        </>
    )
}

export default BasicCSSModule;