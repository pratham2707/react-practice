import styles from './index2.module.css'

function ComposingClasses() {
    return (
        <>
            <button className={styles.myButton}>First Button</button>
            <button className={styles.primary}>Primary Button</button>
            <button className={styles.secondary}>Secondary Button</button>
        </>
    )
}

export default ComposingClasses;